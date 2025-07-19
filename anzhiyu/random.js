var posts=["2025/07/11/深挖逻辑-探知价值（3）消费/","2025/06/23/深挖逻辑-探知价值（1）半导体芯片/","2025/06/27/深挖逻辑-探知价值（2）创新药/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };