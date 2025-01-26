#!/usr/bin/env python3

import cv2
import time

def benchmark(num_times):
    """
    call face_cascade.detectMultiScale 'num_times' number of times 
    and return the execution time
    """
    start = time.time()

    # Load the cascade
    face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

    # Start video capture from the webcam
    cap = cv2.VideoCapture(0) # Use the correct index here

    if not cap.isOpened():
        print("Error: Could not open webcam.")
        return

    # Overhead time to load classifier and start video capture
    overhead_time = time.time() - start

    while True:
        start = time.time()
        
        # Capture frame-by-frame
        ret, frame = cap.read()

        if not ret:
            print("Failed to read frame")
            break
        cv2.imshow("Webcam Feed", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        # Convert into grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces
        for i in range(0, num_times): 
            faces = face_cascade.detectMultiScale(gray, 1.1, 4)

        face_detect_time = time.time() - start

        # Draw rectangles around detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

        # Display the resulting frame
        cv2.imshow('Face Recognition', frame)

        # Print benchmark results to the console
        print(f"overhead_time: {overhead_time:.6f} seconds")
        print(f"time for {num_times} face detections: {face_detect_time:.6f} seconds")

        # Break the loop with 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the capture and close windows
    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    import sys

    if len(sys.argv) != 2:
        print("Usage: python your_script.py <num_times>")
        sys.exit(1)

    num_times = int(sys.argv[1])
    benchmark(num_times)