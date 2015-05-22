using System;
using System;

public class Program
{
	public void Main(string[] args)
	{
		var w = new World();
		var m = w.GetMessage();

		Console.WriteLine($"Hello {m}");
	}
}