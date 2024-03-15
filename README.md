# obsytwidget

- To be used with [Tuna](https://obsproject.com/forum/resources/tuna.843/), using this (proxywidget.html) instead of the default widget
- [Visualizer can be found here](https://obsproject.com/forum/resources/waveform.1423/), the way I have it it has color correction filter with opacity at 0.5
- Everything else is configured within OBS, I set my width to 1520 and height to 282, experiment with what fits your scene best

![image](https://github.com/xamionex/obsytwidget/assets/57235791/b1c71b5e-c2c8-4850-a77d-878856d3e3cc)

## Configuration

- You should make another folder called CustomWidgets
- Git will ignore this folder
- Adding a index.js/index.css inside that folder will load it
- If you need additional JS files you can use the function window.WidgetObj.AddJS("/path/from/root/to/file.js")
- If you want to remove the base you should import your HTML directly
