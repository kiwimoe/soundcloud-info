export interface UserTypes {
    dataStruct: {
        id: number,
        username: string,
        avatarURL: string | null,
        url: string,
        reatedAt: string,
        createdAtF: string | null,
        followersCount: number,
        followingsCount: number,
        groupsCount: number,
        firstName: string | null,
        lastName: string | null,
        fullName: string | null,
        lastModified: string,
        lastModifiedF: string | null,
        likesCount: number,
        urn: string,
        verified: boolean,
    },
    tracks: {
        title: string | null,
        url: string,
        publishedAt: string,
        publishedAtF: string | null,
        genre: string | null,
        duration: number,
    }[],
}
