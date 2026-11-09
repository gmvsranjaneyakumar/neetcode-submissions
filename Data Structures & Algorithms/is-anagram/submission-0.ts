class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sMap = new Map<string, number>();
      
        for (let value of s) {
                let currentValue = sMap.get(value) ?? 0;
                sMap.set(value, currentValue + 1);
        }
        for (let value of t) {
                let currentValue = sMap.get(value) ?? 0;
                sMap.set(value, currentValue - 1);
        }
        for (const value of sMap.values()) {
            if(value !== 0){
                return false;
            }
        }
        return true;
    }
}
