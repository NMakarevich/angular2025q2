export interface ResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Record<ThumbnailType, ThumbnailProperties>;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
    defaultLanguage?: string;
  };
  statistics: Statistics;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ThumbnailProperties {
  url: string;
  width: number;
  height: number;
}

type ThumbnailType = 'default' | 'medium' | 'high' | 'standard' | 'maxres';
