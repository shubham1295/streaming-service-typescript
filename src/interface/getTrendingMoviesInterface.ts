export interface getTrendigMoviesInterface {
    page: number;
    results?: (ResultsEntity)[] | null;
    total_pages: number;
    total_results: number;
  }
  export interface ResultsEntity {
    backdrop_path: string;
    id: number;
    original_language: string;
    overview: string;
    poster_path: string;
    original_title: string;
    title: string;
    release_date: string;
  }
  