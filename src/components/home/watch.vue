<template>
  <div class="watch">
    <p>视频赏析</p>
    <div class="m-video">
      <div v-for="(item,index) in list" :key="index">
        <video
          :src="item.src"
          :poster="item.poster"
          width="400px"
          height="225px"
          @mouseenter="addcontrols"
          @mouseleave="removecontrols"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: "//video.699pic.com/videos/26/06/86/yGNNrqkVCuC41537260686.mp4",
          poster:
            "//img95.699pic.com//video_cover/26/06/58/Dj3vA7PfY1w81537260658.jpg!/fw/820"
        },
        {
          src:
            "http://bpic.588ku.com/video_listen/588ku_video/19/11/07/15/21/53/video5dc3c611a84a7.mp4",
          poster:
            "//bpic.588ku.com/video_listen/588ku_pic/19/11/04/77e3a6f4057708f277504f38e5b87a09.jpg!/fw/800"
        },
        {
          src:
            "//video.699pic.com/videos/02/03/16/b_h7NTp1hY3eg21547020316.mp4",
          poster:
            "//img95.699pic.com//video_cover/02/02/44/b_d7R9i6JGkdHk1547020244.jpg!/fw/820"
        },
        {
          src:
            "http://bpic.588ku.com/video_listen/588ku_video/19/10/28/14/48/34/video5db68f42c1643.mp4",
          poster:
            "//bpic.588ku.com/video_listen/588ku_pic/19/10/25/f2abd91f0e1ee2b5aee8c85345021138.jpg!/fw/800"
        }
      ]
    };
  },
  methods: {
    addcontrols(e) {
      e.target.controls = true;
    },
    movecontrols(e) {
      e.target.controls = false;
    }
  }
};
</script>

<style>
</style>