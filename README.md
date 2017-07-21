# Learning-Notes
Recording every day's learning<br>
FreeCodeCamp<br>
零基础的前端开发初学者应如何系统地学习？<br>
http://www.cnblogs.com/specter45/p/github.html
-----Static Method Test------------<br>

class Calculator{
	    private static int num=10;
	    public static void Reset() {
		    num=0;
	    }
	    public static void Add() {
		    num+=10;
	    }
	    public static void Sub(int num) {
		    num-=5;
	    }
	    public static void Show() {
		    Console.Write(num+ " ");
	    }
}
public class Program{
	public static void Main(string[] args) {
		int num=55;
		Calculator.Sub(num);
		Console.Write(num+ " ");	
		Calculator .Add();
		Console.Write(num+ " ");	
		Calculator .Show();
	}
}
-----The answer is (55 55 20 )--------------- <br>
