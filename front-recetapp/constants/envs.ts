
export const apiUrl = process.env.NODE_ENV === 'development' ?
    `${process.env.EXPO_PUBLIC_LOCAL_API_URL}/api/v1` :
    `${process.env.EXPO_PUBLIC_PRODUCTION_API_URL}/api/v1`;
