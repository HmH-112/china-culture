<template>
  <div class="intro">
    <div class="img">
      <img :src="meta.imgs" />
    </div>
    <h1>
      {{meta.author}}
      <img class="horn" src="@/assets/images/horn.png" @click="playing" />
    </h1>
    <p>{{meta.des}}</p>
    <audio class="vedioPlayer" :src="meta.audio"></audio>
  </div>
</template>

<script>
export default {
  props: ["meta","index"],
  methods: {
    playing(e) {
      const vedioPlayer = document.getElementsByClassName("vedioPlayer")[this.index];
      if (vedioPlayer.paused) {
        vedioPlayer.play();
        e.target.setAttribute(
          "src",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAB50lEQVQ4T62Vv2sUURDHv3MsXgoLLSwV7Y68GeEUCwUlIFiIaQJWgpEUpjT/gSeksJFTsTGo6VKI4A8Qm0DagFjte157nVjnCu/H3siEXVn3Nt7i3SsfM583M2++M4QKp9lsnhoMBptEJN77KxVcQNOMROSaqrYBXDBb7/1UH7P7p5GIrKvqUwALWQB5MDMvEdFjAG/iON7KB3kkmJkN+KCYUR5sJRoOh58BXFLVLyGEm5n9BJiZTwN4BeBGWZkysEXb6/X2u93uL2beA7AEYMV7//6wFGYA4CKAWzmQ3ZUeA6c+BjsA8Mh7/0REvKouJElytdPp/CARaavqxrRPLNaYmR8CaKX3FtRPAF/Th1r2epZGJXbh89YAvFbVnRDCHWZ+R0SXkyQ5NxPYIhGRXVW9HkXRydFodBfAMwBnZgY75zaIqD0ej5sGrNVqH61LZgaLyH1VfUlE560EcwMz8ycAy/V6/US/31+dSylE5LaqvlXVrRDC+l+f97/tlkHTNjMxHSu22ywC+UZEm3Ecf5gQSLF5G43G2SiKtlOJTvR2TtIt7/2hQEolfZQqnHPbRHRvbkMoD2Jmi8ik++eUjM0XAJ5XHpsZyTm3SkTmfLxs0DvnFkMI34uZVdoG6RaxgW4bpNJq+g3kewfesnQbfgAAAABJRU5ErkJggg=="
        );
      } else {
        vedioPlayer.pause();
        e.target.setAttribute(
          "src",
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAB7ElEQVQ4T62VvYtTQRTFz533IhYWWmypJPAmDwQFlS0UlAVhC9FGsBJcsXBL/Q/MwhbbyK5i46K7nYUIfoDYCLaC2InhvTu9bG1jisyRGxIJL4mJJlMOZ37ce+7HCGY4qrpEclNETnnvL8zwBDJNVJblJRHZBnDWtN77qW9M91dRWZbrIrID4PAggGGwqq4A2BKRvSzLdoeDnAgOIeyQvFfNqAJeEpH3JJcBfPDeXxnoR8AhhOMknwFYHWfTAGzRpmn6udFo/FLVTwBWROR6lmWve1aYQETOkbw6BLIUxx4D9y0w2E8R2ciy7KGqfjPLarXaxXq9/sNEVpj704pY9VhVHwBo2b0FlSTJQYzxS4xxI8/zloF7afwr2PSqegfAcwAvvPc3VfUVgPOdTqcxF9jgIYSPJC+naXqs2+3eIvlIRE7MDVZVs3Gb5BkDAnjrnFueGxxCuEvyqXPudIyxsTCwqr4DcM05d5Tk2kKsUNUbAF6S3G02m+vV4v1vu/WgAA6SJFkleajabvMMyNcY42ae529GBqTav+12u56m6f6k3h6MdFEULRuEfj+PjvSkwQgh7JO8vbAlNAyyqJxzNrp/zpi1+UREHs+8NgekoijWRMQeHxm36FX1pPf+ezWzmX6D/i+y1QfP9DX9BntBESDwq+QkAAAAAElFTkSuQmCC"
        );
      }
    }
  }
};
</script>

<style>
</style>