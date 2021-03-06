export interface TrackData {
    id: number,
    title: string,
    description: string | null,
    avatar_url: string | null,
    duration: number,
    playback_count: number | 0,
    download_count: number | 0,
    comment_count: number | 0,
    likes_count: number | 0,
    genre: string | null,
    purchase_url: string | null,
    tag_list: string | string[] | null,
    user_id: number,
    username: string,
    avatarURL: string | null,
    created_at: string,
    createdAtF: string | null,
    followersCount: number | 0,
    followingsCount: number | 0,
    groupsCount: number | 0,
    firstName: string | null,
    lastName: string | null,
    fullName: string | null,
    lastModified: string,
    lastModifiedF: string | null,
    likesCount: number | 0,
    urn: string,
    verified: boolean,
    user: {
        username: string,
        avatar_url: string | null,
        created_at: string,
        followers_count: number | 0,
        followings_count: number | 0,
        groups_count: number | 0,
        first_name: string | null,
        last_name: string | null,
        full_name: string | null,
        last_modified: string,
        likes_count: number | 0,
        urn: string,
        badges: {
            verified: boolean,
        },
    };
    media: {
        transcodings: {
            preset: string,
            protocol: string,
            url: string,
            format: {
                protocol: string,
            },
        }[],
    },
}
