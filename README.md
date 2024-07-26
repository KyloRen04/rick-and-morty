# Rick & Morty

A React application that displays profiles of characters, episodes, and locations from the popular TV show *Rick & Morty*. The app provides a search feature, filtering options, and pagination to browse through the data.

## Features

- **Character Profiles**: View detailed profiles of Rick & Morty characters, including their status, species, gender, and origin.
- **Episode Information**: Browse episodes and view details about each episode's characters.
- **Location Details**: Explore various locations from the show and see details about characters from those locations.
- **Search & Filters**: Search for characters and filter them based on status, gender, and species.
- **Pagination**: Navigate through pages of characters using pagination controls.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Bootstrap**: For styling and responsive design.
- **React Router**: For routing and navigation.
- **React Paginate**: For pagination controls.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/KyloRen04/rick-and-morty.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd rick-and-morty
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

   The application will be available at `http://localhost:5173`.

## Project Structure

- **`src`**: Contains the application's source code.
  - **`components`**: Reusable components like `Card`, `Navbar`, and `Pagination`.
  - **`pages`**: Page components for `Episodes`, `Location`, and `CardDetails`.
  - **`App.jsx`**: The root component that sets up routes and layout.
  - **`index.jsx`**: The entry point for the React application.

## Usage

- **Home Page**: Displays a list of characters with search and filter options.
- **Character Details**: View detailed information about a specific character.
- **Episodes Page**: View details about episodes and their characters.
- **Location Page**: View details about locations and their characters.

## Contributing

1. **Fork the repository**.
2. **Create a feature branch**:
    ```bash
    git checkout -b feature/your-feature
    ```
3. **Commit your changes**:
    ```bash
    git commit -am 'Add new feature'
    ```
4. **Push to the branch**:
    ```bash
    git push origin feature/your-feature
    ```
5. **Create a new Pull Request**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The Rick & Morty API used for data retrieval.
- [Bootstrap](https://getbootstrap.com/) for styling.
- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for application development.
