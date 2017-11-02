/**
 * Created by lenovo on 2017/11/1.
 */

// 被第三方模块引入时才能才看出问题
console.log(process.cwd())
// C:\Project
console.log(__dirname)
// C:\Project\lib
console.log(__dirname===process.cwd())
// false