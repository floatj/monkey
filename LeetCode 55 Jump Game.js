var canJump = function(nums) {
    // greedy
    let greedy = 0;
    for (let i = 1; i < nums.length; i++) {
        greedy = Math.max(greedy, nums[i - 1]) - 1;

        //有可能沒辦法跳到最後
        if (greedy < 0) return false;
    }
    return greedy >= 0;
};
