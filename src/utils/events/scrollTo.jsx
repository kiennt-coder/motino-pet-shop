function scrollTo(options) {
    try {
        window.scrollTo(options || { top: 0, left: 0, behavior: "smooth" });
    } catch (error) {
        return false;
    }

    return true;
}

export default scrollTo;
