/*
  Every time a new static asset is added, this array should be updated
*/
const videoFileNames = ['andrew_tate_01.mp4', 'goggins_01.mp4', 'workout_03.mp4'];
export const availableVideos = videoFileNames.map((fileName) => `/videos/${fileName}`);
