class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const dupCheckMap = new Map<number, number>();
        for( let num of nums){
            if(dupCheckMap.has(num)){
                dupCheckMap.set(num, dupCheckMap.get(num)! +1);
            }else{
                dupCheckMap.set(num, 1);
            }
            
        }
        for(const value of dupCheckMap.values()){
            if(value > 1){
                return true;
            }
        }
        return false;
    }
}
