const Middleware = (state) => {
    localStorage.setItem('state', JSON.stringify(state));
}

export default Middleware;