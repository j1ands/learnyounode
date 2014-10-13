var arr_of_nums = process.argv;
result = 0;

for(var x = 2; x < arr_of_nums.length; x++)
{
	result += Number(arr_of_nums[x]);
}

console.log(result.toString())