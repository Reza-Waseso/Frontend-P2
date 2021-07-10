<template>
    <div class="sidebar">
        <vs-sidebar
        absolute
        v-model="active"
        open
        >
        <h1>Aplikasi P2</h1>
        <vs-sidebar-item id="Dashboard">
            <router-link class="sidebar-link" to="/Dashboard">Dashboard</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="Perkawinan">
            <router-link class="sidebar-link" to="/Perkawinan">Perkawinan</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="Perceraian">
            <router-link class="sidebar-link" to="/Perceraian">Perceraian</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="Kontak">
            Kontak Kami
        </vs-sidebar-item>
        
    </vs-sidebar>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
        msg: String,
    },
    data: () => ({
        active: "0",
        activeSidebar: false,
    }),
};
</script>

<style>

</style>