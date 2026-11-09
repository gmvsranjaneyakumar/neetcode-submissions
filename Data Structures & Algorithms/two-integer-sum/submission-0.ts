class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // var i:number, j:number=0;
        // var indexs:number[] = [];
        // for(i=0;i < nums.length;i++){
        //     for(j=i+1;j < nums.length;j++){
        //         if(nums[i]+nums[j] === target){
        //             indexs.push(i);
        //             indexs.push(j);
        //             break;
        //         }
        //     }
        // }
        // return indexs;
        const valueMap = new Map<number,number>();
        for(let i=0; i < nums.length; i++){
            const differeceValue = target - nums[i];
            if(valueMap.has(differeceValue)){
               return[valueMap.get(differeceValue)!, i];
            }
            valueMap.set(nums[i], i);
        }
        return [];
    }

}
