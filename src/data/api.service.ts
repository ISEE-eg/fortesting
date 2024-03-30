class ApiService {
  private apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

    
  public async get<T>(url: string, queryParams?: { [key: string]: any }): Promise<T> {
    let combinedUrl = url;
    if(queryParams && Object.keys(queryParams)) {
      combinedUrl = `${url}?${new URLSearchParams(queryParams).toString()}`;
    }
    const response = await fetch(`${this.apiUrl}/${combinedUrl}`);
    return response.json();
  }
}
export const apiService = new ApiService()

