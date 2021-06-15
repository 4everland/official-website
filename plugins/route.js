export default ({ app }) => {
    app.router.afterEach((to, from) => {
        console.log(this.$refs.vheader.active);
    })
}