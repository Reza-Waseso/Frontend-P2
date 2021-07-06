<template>
    <div>
        <vs-navbar color="#7d33ff" text-white center-collapsed>
            <h2>Selamat Datang Di<br>Aplikasi Perkawinan dan Perceraian</h2>
            <template #right>
                <vs-input type="text" v-model="search" placeholder="Search"/>
                <vs-button color="rgb(255,255,255)" flat>Search</vs-button>
            </template>
        </vs-navbar>
    </div>

</template>

<script>
export default {
    name: "Navbar",
    props: {
        msg: String,
    },
    data: () => ({
        active: "0",
        activeSidebar: false,
    }),
};
</script>

<style scoped>
    h2 {
    
    overflow: hidden;
    padding-left: 125px;
    
}
    ::placeholder {
        color: black;
        opacity: 1;

}
</style>