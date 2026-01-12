import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { photography } from "../data";

export default class Photography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedYear: null,
            selectedPhoto: null
        };
    }

    // Extract year from date string (e.g., "October 2025" -> "2025")
    extractYear = (dateString) => {
        const yearMatch = dateString.match(/\b(19|20)\d{2}\b/);
        return yearMatch ? yearMatch[0] : null;
    }

    // Convert date string to sortable value (year * 100 + month, for sorting)
    // Returns a number where higher = more recent
    dateToSortValue = (dateString) => {
        const yearMatch = dateString.match(/\b(19|20)(\d{2})\b/);
        if (!yearMatch) return 0;
        
        const year = parseInt(yearMatch[1] + yearMatch[2]);
        
        // Month mapping
        const monthMap = {
            'january': 1, 'jan': 1,
            'february': 2, 'feb': 2,
            'march': 3, 'mar': 3,
            'april': 4, 'apr': 4,
            'may': 5,
            'june': 6, 'jun': 6,
            'july': 7, 'jul': 7,
            'august': 8, 'aug': 8,
            'september': 9, 'sep': 9, 'sept': 9,
            'october': 10, 'oct': 10,
            'november': 11, 'nov': 11,
            'december': 12, 'dec': 12,
            'spring': 4, // Spring = April
            'summer': 7, // Summer = July
            'fall': 10, 'autumn': 10, // Fall = October
            'winter': 1 // Winter = January
        };
        
        const dateLower = dateString.toLowerCase();
        let month = 6; // Default to mid-year if no month found
        
        for (const [key, value] of Object.entries(monthMap)) {
            if (dateLower.includes(key)) {
                month = value;
                break;
            }
        }
        
        // Return year * 100 + month so we can sort by both
        return year * 100 + month;
    }

    // Sort photos by date (most recent first)
    sortPhotosByDate = (photos) => {
        return [...photos].sort((a, b) => {
            const dateA = this.dateToSortValue(a.date);
            const dateB = this.dateToSortValue(b.date);
            return dateB - dateA; // Descending order (newest first)
        });
    }

    // Get unique years from all photos
    getUniqueYears = () => {
        const years = photography
            .map(photo => this.extractYear(photo.date))
            .filter(year => year !== null);
        return [...new Set(years)].sort((a, b) => b - a); // Sort descending (newest first)
    }

    // Filter photos by selected year and sort by date
    getFilteredPhotos = () => {
        let photos;
        if (this.state.selectedYear === null) {
            photos = photography;
        } else {
            photos = photography.filter(photo => 
                this.extractYear(photo.date) === this.state.selectedYear
            );
        }
        return this.sortPhotosByDate(photos);
    }

    handleYearChange = (year) => {
        this.setState({ selectedYear: year });
    }

    handlePhotoClick = (photo) => {
        this.setState({ selectedPhoto: photo });
    }

    handleCloseModal = () => {
        this.setState({ selectedPhoto: null });
    }

    handleKeyDown = (e) => {
        if (e.key === 'Escape' && this.state.selectedPhoto) {
            this.handleCloseModal();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        const uniqueYears = this.getUniqueYears();
        const filteredPhotos = this.getFilteredPhotos();

        return (
        <>
            <div className="text-gray-400 bg-background_about body-font">
                <Navbar />
            </div>

            <section className="text-gray-400 bg-background_about body-font min-h-screen">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-slate-300 text-gray-600 text-center">
                            Photography
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-350 text-center">
                            A small collection of my photography work. I dabble in film photography and am trying to hone my skills while discovering new places.
                        </p>
                    </div>

                    {/* Year Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        <button
                            onClick={() => this.handleYearChange(null)}
                            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                this.state.selectedYear === null
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                        >
                            All Years
                        </button>
                        {uniqueYears.map(year => (
                            <button
                                key={year}
                                onClick={() => this.handleYearChange(year)}
                                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                                    this.state.selectedYear === year
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                    
                    {filteredPhotos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredPhotos.map((photo, index) => (
                                <div 
                                    key={index} 
                                    className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                                    onClick={() => this.handlePhotoClick(photo)}
                                >
                                    <img 
                                        src={photo.image} 
                                        alt={photo.title || `Photography ${index + 1}`}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {photo.title && (
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                                            <div className="w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-white font-semibold text-lg mb-1">
                                                    {photo.title}
                                                </h3>
                                                {photo.date && (
                                                    <p className="text-gray-300 text-sm">
                                                        {photo.date}
                                                    </p>
                                                )}
                                                {photo.location && (
                                                    <p className="text-gray-300 text-sm">
                                                        {photo.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
                                No photography images found for the selected year.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {this.state.selectedPhoto && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={this.handleCloseModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl font-bold z-10 w-10 h-10 flex items-center justify-center"
                        onClick={this.handleCloseModal}
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div 
                        className="relative max-w-7xl w-full max-h-full flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={this.state.selectedPhoto.image}
                            alt={this.state.selectedPhoto.title || 'Enlarged photo'}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="mt-4 bg-black bg-opacity-75 text-white p-4 rounded-lg w-full max-w-2xl">
                            <h3 className="text-xl font-semibold mb-2">
                                {this.state.selectedPhoto.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                                {this.state.selectedPhoto.location && (
                                    <p className="text-gray-300 text-sm">
                                        {this.state.selectedPhoto.location}
                                    </p>
                                )}
                                {this.state.selectedPhoto.date && (
                                    <p className="text-gray-300 text-sm">
                                        {this.state.selectedPhoto.date}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
        );
    }
}