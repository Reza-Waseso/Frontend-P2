<template>
    <div>
        <div class="Head">
            <table class="hform">
                <tr>
                    <td style="width: 30%">PEMERINTAH PROVINSI</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 50%">Kalimantan Timur</td>
                </tr>
                <tr>
                    <td>KABUPATEN/KOTA</td>
                    <td>:</td>
                    <td>BALIKPAPAN</td>
                </tr>
                <tr>
                    <td>KECAMATAN</td>
                    <td>:</td>
                    <td>BALIKPAPAN TENGAH</td>
                </tr>
                <tr>
                    <td>KELURAHAN</td>
                    <td>:</td>
                    <td>SUMBER REJO</td>
                </tr>
                <tr>
                    <td>RT</td>
                    <td>:</td>
                    <td>69</td>
                    <td>KODE POS</td>
                    <td>:</td>
                    <td>69420</td>
                </tr>
            </table>
            <hr size="1" color="black">
            <hr size="1" color="black">
            <br>
            <p style="text-align: center; text-decoration: underline;"><strong>SURAT KETERANGAN</strong></p>
            <p style="text-align: center;"><strong>NO.321321321321321</strong></p>
        </div>
        <div class="Body">
            <p style="text-align: left;">Yang bertanda tangan dibawah ini selaku Ketua RT menerangkan bahwa :</p>
            <table class="form">
                <tr>
                    <td style="width: 120px">Nama</td>
                    <td style="width: 5%">:</td>
                    <td style="width: 65%"></td>
                </tr><br>
                <tr>
                    <td>NIK</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>No.Akta Cerai</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>No.Seri Cerai</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>No.Akta Kawin</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td></td>
                </tr><br>
                <tr>
                    <td>keterangan</td>
                    <td>:</td>
                    <td></td>
                </tr>
            </table>
            <br>
            
            <p style="text-align: left;">Demikian surat keterangan ini dibuat, untuk dapat dipergunakan sebagaimana mestinya.</p>

            <div style="width: 50%; text-align: right; float: right;">Mengetahui</div>
            <br>
            <div style="width: 40%; text-align: right; float: right;">Ketua RT </div>
            <br><br>
        </div>
        <button type="button">
            Print PDF
        </button>
    </div>
</template>

<script>

export default {
    name: "Kopsurat",


}
</script>

<style>
    .form {
        text-align: left;
}

    .Body {
        margin: 10px;
        margin-left: 120px;
        margin-right: 120px;
        
        
        padding-left: px;
        padding-top: 30px;
        padding-right: px;
        padding-bottom: 80px;
}
    .Head {
        margin-top: 120px;
        margin-left: 120px;
        margin-right: 120px;
        margin-bottom: 10px;
        text-align: left;
        font-weight: 900;
}


    
</style>