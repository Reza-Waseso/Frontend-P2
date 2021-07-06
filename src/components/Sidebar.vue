<template>
    <div class="sidebar">
        <vs-sidebar
        absolute
        v-model="active"
        open
        >
        <h1>Aplikasi P2</h1>
        <vs-sidebar-item id="Dashboard">
            Dashboard
        </vs-sidebar-item>
        <vs-sidebar-item id="Perkawinan">
            Perkawinan
        </vs-sidebar-item>
        <vs-sidebar-item id="Perceraian">
            Perceraian
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