# Day 1

## Big O notations

## Programming Paradigms

  * Divide & Conquer : Divide the problem in multiple parts and solve them individually. After solving merge them again to form the result. 

  * Greedy :  Optimal Solution (Optimization) Algorithm i.e the problem which requires minimum or maximum result. The problem is solved in stages. For each stage if the solution is optimal include in the result. Uses BFS algorithm. 
  Algo :
    
    ```js
        function Greedy(a,n){
            for i =1 to n do 
             {
                 x = Select(a);
                 if Feasible(x)  then 
                 {
                     Solution = Soltion +x ;
                 }

               }
        }
    ```
    

   `Example` :  Knapsack problem, Job scheduling

  * Dynamic programming :
  * Backtracking :  It uses recursive algorithm to find the solution. You need to define bounding function to stop the check. Based on Depth First search.   
  `e.g :`  Graph Coloring, Hamilton Cycle.
  * Branch and Bound :
     Similar to Backtracking but uses BFS to find the solution. Solves only the minimization problem. 
  * Brute Force : 