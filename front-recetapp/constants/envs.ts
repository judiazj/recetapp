
export let apiUrl: string | undefined;

if (process.env.NODE_ENV === 'development') {
    apiUrl = process.env.EXPO_PUBLIC_LOCAL_URL;
} else {
    apiUrl = process.env.EXPO_PUBLIC_API_URL;
}