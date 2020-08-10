const path=require('path');

const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports={
    entry:{
        index:"./src/pages/index/index.tsx",
    },


    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'dist')
    },

    devtool:'source-map',

    resolve:{
        modules:["node_modules"],
        alias:{
            '@component':path.resolve(__dirname,'src/component'),
            '@images':path.resolve(__dirname,'src/images'),
            '@css':path.resolve(__dirname,'src/css'),
            'antd':path.resolve(__dirname,'node_modules/antd')
        },
        extensions:['.ts','.tsx','.js','.json']
    },

    module:{
        rules:[
            {
                test:/\.less$/,
                use:[{
                    loader:'style-loader',
                },{
                    loader:'css-loader',
                },{
                    loader:'less-loader',
                    options:{
                        lessOptions:{
                            javascriptEnabled: true,
                            // modifyVars:{
                                
                            //     "@primary-color": "#1890ff", // 全局主色
                            //     "@link-color": "#1890ff", // 链接色
                            //     "@success-color": "#52c41a", // 成功色
                            //     "@warning-color": "#faad14", // 警告色
                            //     "@error-color": "#f5222d", // 错误色
                            //     "@font-size-base": "14px", // 主字号
                            //     "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
                            //     "@text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
                            //     "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
                            //     "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
                            //     "@border-radius-base": "2px", // 组"件/浮层圆角
                            //     "@border-color-base": "rgba(138,23,21,1)", // 边框色
                            //     "@box-shadow-base":"0 3px 6px -4px rgba(0,0,0,.12),0 6px 16px 0 rgba(0,0,0,.08),0 9px 28px 8px rgba(0,0,0,.05)" // 浮层阴影
                            // }
                        }
                    }
                }]
            },
            {
                //详细loader配置
                    test: /\.css$/,
                    use:[
                        //use执行顺序从后往前
                    //创建style标签，将js中的样式插入添加到head
                        'style-loader',
                        //将css文件编程commonjs模块加载到js中，内容为样式字符串
                        'css-loader'
                    ]
                },{
                    test:/\.(jpg|png|gif)$/,
                    loader:'url-loader',
                    options:{
                        //图片大小小于8kb，会被base64处理
                        limit: 8 * 1024,
                        //esModule:false
                        name:'[hash:10].[ext]',
                        outputPath:'images/'
                    }
                },
                {
                    test:/\.html$/,
                    loader:'html-loader'
    
                },
            {
                test:/\.tsx?$/,loader:"awesome-typescript-loader"
            },

            {
                enforce:"pre",test:/\.js$/,loader:"source-map-loader"
            }
        ]
    },

    // externals:{
    //     "react":"React",
    //     "react-dom":"ReactDOM"
    // },

    mode: 'development',
    
    
    plugins:[
        //详细plugins配置
        new HtmlWebpackPlugin({
            title:'index',
            filename:'index.html',
            template:"./src/pages/index/index.html",
            chunks:['index']
            
        })
        
        // new HtmlWebpackPlugin({
        //     title:'Login',
        //     filename:'login.html',
        //     template:"./src/pages/login/login.html",
        //     chunks:['login']
        // })
    ],

    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        compress:true,
        port:3000,
        open:true,
        hot:true,
        overlay:true,
        //host:"0.0.0.0",
        index:"./index.html"

    }


};