const saveThemeToLocalStorage = async (theme) => {
    try {
        await localStorage.setItem('id_doc_theme', theme);
        return theme;
    } catch (error) {
        return {
            success: false,
            message: 'Failed to save theme: ' + error.message,
        };
    }
};
const getTheme = async () => {
    try {
        let gotTheme = await localStorage.getItem('id_doc_theme');
        return gotTheme;
    } catch (error) {
        return {
            success: false,
            message: 'Failed to get theme: ' + error.message,
        };
    }
}

const themeService = {
    saveThemeToLocalStorage,
    getTheme,
}
export default themeService