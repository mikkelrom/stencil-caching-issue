# Steps to reproduce stencil cache issue

1. Clone repo to a local folder
1. Run `npm run install-and-build`
1. Run `npm run gethash` and observe the hash-value logged in the terminal
1. Open `stencil-test/src/components/my-component/my-component.tsx` and make a change, for example change this: `return <div>Hello, World! I'm {this.getText()}</div>;`
to this: `return <div>Hello, World 2! I'm {this.getText()}</div>;`
1. Run `npm run build` to generate new files with the recent change
1. Run `npm run gethash` again, and observe that the hash-value logged in the terminal has change - but the filename has not. It's still `p-8874d9b8.system.js`.

#Conclusion
The contents of `p-8874d9b8.system.js` changes without the file itself is renamed, which means that the `p-*`-files isn't immutable even though:
 1. The `stencil-test/www/host.config.json` suggests that this HTTP response header should be added to files that matches `/build/p-*`: `cache-control: max-age=31556952, s-maxage=31556952, immutable`
 1. The docs says that the files can be "forever-cached" and "If the content isn't updated between builds, then it receives the same filename. When the content is updated, then the filename is different" - this is currently not true unfortunately 😢
    > During production builds, the content of each generated file is hashed to represent the content, and the hashed value is used as the filename. If the content isn't updated between builds, then it receives the same filename. When the content is updated, then the filename is different. By doing this, deployed apps can "forever-cache" the build directory and take full advantage of content delivery networks (CDNs) and heavily caching files for faster apps." 
    
    https://stenciljs.com/docs/config#hashfilenames
