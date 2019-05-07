// cppClient.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <winerror.h>
#include <objbase.h>
#include "tchar.h"

#import "..\..\Zipcode_Lookup\Zipcode_Lookup\bin\Debug\Zipcode_Lookup.tlb" raw_interfaces_only
using namespace Zipcode_Lookup;
int _tmain(int argc, _TCHAR* argv[])
{
	// Initialize COM.
	HRESULT hr = CoInitialize(NULL);

	// Create the interface pointer.
	ICalculatorPtr pICalc(__uuidof(ManagedClass));

	long lResult = 0;

	// Call the Add method.
	pICalc->Add(5, 10, &lResult);

	wprintf(L"The result is %d\n", lResult);


	// Uninitialize COM.
	CoUninitialize();
	return 0;
}



// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
