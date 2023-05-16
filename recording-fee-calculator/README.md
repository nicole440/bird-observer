# Recording Fee Calculator

This is a Vue.js application that calculates recording fees based on various parameters such as document type, page count, consideration amount, and additional fees. It provides an easy-to-use interface for users to input the required information and get the total charges.

## Features

- Select the document type from a dropdown menu.
- Enter the page count for the document.
- For deeds, enter the consideration amount and choose whether it is exempt from transfer tax or not.
- Add an optional Simplifile fee.
- Calculate and display the total charges based on the input.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Build the Vue.js application:

   ```
   npm run build
   ```

5. Start the application:

   ```
   npm run serve
   ```

6. Open your web browser and access the application at `http://localhost:8080`.

## Usage

1. Select the document type from the dropdown menu.
2. Enter the page count for the document.
3. If the document type is a deed, enter the consideration amount and choose whether it is exempt from transfer tax or not.
4. Check the "Add Simplifile Fee" checkbox to include the Simplifile fee.
5. The total charges will be calculated and displayed below the form.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://mit-license.org/).

## Docker Image (optional)

If you prefer to use Docker to run the application, a Dockerfile is included in the project. You can build a Docker image and run the application inside a container by following these steps:

1. Build the Docker image:

   ```
   docker build -t recording-fee-calculator .
   ```

2. Run a Docker container based on the image:

   ```
   docker run -p 8080:8080 recording-fee-calculator
   ```

3. Open your web browser and access the application at `http://localhost:8080`.

## Notes

- The fees specified in this application are specific to the recording fees set by the Lancaster County Recorder of Deeds Office and the Simplifile e-recording software. Please confirm that the base fees remain accurate before submitting documents for recording.
- The application provides a popup message with additional information about the fees. You can hover over the popup to see the full message.

## Acknowledgments

- This application was developed using Vue.js, a JavaScript framework for building user interfaces.
- The application uses the Bootstrap CSS framework for styling.