function conv(element){
    let ans={};

    ans.imgsrc=element.children[0].src;
    let info=element.children[1].children[0];
    for (let i=0;i<5;i++)
    {
        ans[info.children[i].className]=info.children[i].innerText;
    }
    return ans;
}
