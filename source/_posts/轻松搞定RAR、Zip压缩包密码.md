---
title: 轻松搞定RAR、Zip压缩包密码
cover: https://img.090227.xyz/file/ae62475a131f3734a201c.png
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2025-08-10 18:51:36
updated:
tags:
categories:
keywords:
description:
top:
top_img:
comments:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
ai:
---

1.hashcat ：https://hashcat.net
2.john the ripper ：https://www.openwall.com
注：官网是英文的，可以通过谷歌浏览器翻译成中文
只需用到2个命令：
rar2john.exe xxxx.rar   –获取hash值
hashcat.exe -m 13000 -w 4 -a 3 $rar5$16$b88c1d7d2c96dc9d1b1a5ccdc5c25d50$15$8f0b287c982535c868bbff486ee9acd2$8$43907bfa03430471 -o password.txt  — 开始