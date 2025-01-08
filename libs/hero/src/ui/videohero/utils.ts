// libs/hero/src/ui/videohero/utils.ts
export const getVideoType = (url: string): 'youtube' | 'direct' => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    }
    return 'direct';
  };
  
  export const getYouTubeEmbedUrl = (url: string): string => {
    // Handle different YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };