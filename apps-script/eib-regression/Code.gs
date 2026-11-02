const REGRESSION_QUESTIONS = JSON.parse(Utilities.newBlob(Utilities.base64Decode('W3sicXVlc3Rpb24iOiJFbiB1biBtb2RlbG8gZGUgcmVncmVzacOzbiBsaW5lYWwgbcO6bHRpcGxlIGNvbiAkcCQgdmFyaWFibGVzIGV4cGxpY2F0aXZhcywgwr9jw7NtbyBzZSBpbnRlcnByZXRhIGRlIGZvcm1hIHByZWNpc2EgZWwgcGFyw6FtZXRybyAkXFxiZXRhX2okIGFzb2NpYWRvIGEgbGEgdmFyaWFibGUgJFhfaiQ/Iiwib3B0aW9ucyI6WyJFcyBlbCB2YWxvciBtZWRpbyBxdWUgYWRvcHRhIGxhIHJlc3B1ZXN0YSAkWSQgY3VhbmRvIMO6bmljYW1lbnRlIGxhIHZhcmlhYmxlIGV4cGxpY2F0aXZhICRYX2okIHRvbWEgZWwgdmFsb3IgY2Vyby4iLCJFcyBlbCBjYW1iaW8gYWJzb2x1dG8gZXNwZXJhZG8gZW4gbGEgdmFyaWFibGUgcmVzcHVlc3RhICRZJCBwb3IgY2FkYSB1bmlkYWQgZGUgY2FtYmlvIGVuICRYX2okLCBpbmRlcGVuZGllbnRlbWVudGUgZGUgbGFzIGRlbcOhcyB2YXJpYWJsZXMuIiwiUmVwcmVzZW50YSBsYSBwcm9wb3JjacOzbiBkZSB2YXJpYWJpbGlkYWQgdG90YWwgZGUgJFkkIHF1ZSBlcyBleHBsaWNhZGEgZGUgZm9ybWEgZXhjbHVzaXZhIHBvciBsYSB2YXJpYWJsZSAkWF9qJC4iLCJFcyBlbCBjYW1iaW8gZW4gZWwgdmFsb3IgbWVkaW8gZGUgbGEgcmVzcHVlc3RhICRZJCBhc29jaWFkbyBhIHVuIGF1bWVudG8gZGUgdW5hIHVuaWRhZCBlbiAkWF9qJCwgbWFudGVuaWVuZG8gY29uc3RhbnRlcyBsYXMgZGVtw6FzIHZhcmlhYmxlcyBkZWwgbW9kZWxvLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IlJlZmxlamEgbGEgYXNvY2lhY2nDs24gbGluZWFsIGVzcGVjw61maWNhIGFqdXN0YWRhIGVudHJlICRYX2okIHkgZWwgdmFsb3IgZXNwZXJhZG8gZGUgJFkkIHRyYXMgY29udHJvbGFyIGVsIGVmZWN0byBzaW11bHTDoW5lbyBkZWwgcmVzdG8gZGUgcHJlZGljdG9yZXMuIiwiaGludCI6IlJlY3VlcmRhIHF1ZSBsYSByZWdyZXNpw7NuIG3Dumx0aXBsZSBldmFsw7phIGVsIGVmZWN0byBpbmRpdmlkdWFsIGRlIHVuYSB2YXJpYWJsZSBhaXNsYW5kbyBsYSBpbmZsdWVuY2lhIGRlbCByZXN0byBkZSBwcmVkaWN0b3Jlcy4ifSx7InF1ZXN0aW9uIjoiQWwgZXN0aW1hciBsYSBkZXN2aWFjacOzbiB0w61waWNhIHJlc2lkdWFsICRzX3tcXHZhcmVwc2lsb259ID0gXFxzcXJ0e1xcZnJhY3tTQ197cmVzfX17biAtIHAgLSAxfX0kIGVuIHVuIG1vZGVsbyBkZSByZWdyZXNpw7NuIG3Dumx0aXBsZSwgwr9wb3IgcXXDqSBzZSByZXN0YW4gJHAgKyAxJCBncmFkb3MgZGUgbGliZXJ0YWQgZW4gZWwgZGVub21pbmFkb3I/Iiwib3B0aW9ucyI6WyJQb3JxdWUgc2UgaGFuIGVzdGltYWRvIHByZXZpYW1lbnRlICRwICsgMSQgcGFyw6FtZXRyb3MgZW4gZWwgbW9kZWxvOiBlbCBpbnRlcmNlcHRvICRcXGJldGFfMCQgeSBsb3MgJHAkIGNvZWZpY2llbnRlcyAkXFxiZXRhX2okLiIsIkRlYmlkbyBhIHF1ZSBleGlzdGVuICRwJCB2YXJpYWJsZXMgZXhwbGljYXRpdmFzIHF1ZSBnZW5lcmFuICRwICsgMSQgY29tYmluYWNpb25lcyBsaW5lYWxlcyBvcnRvZ29uYWxlcyBlbnRyZSBsb3MgcmVzaWR1b3MuIiwiUGFyYSBwZW5hbGl6YXIgbGEgcHJlc2VuY2lhIGRlIG9ic2VydmFjaW9uZXMgYXTDrXBpY2FzIGUgaW5mbHV5ZW50ZXMgaWRlbnRpZmljYWRhcyBlbiBsYSBtdWVzdHJhLiIsIlBvcnF1ZSBlbCBjw6FsY3VsbyBleGlnZSBlc3RpbWFyIGxhcyB2YXJpYW56YXMgaW5kaXZpZHVhbGVzIGRlIGNhZGEgdW5hIGRlIGxhcyAkcCQgdmFyaWFibGVzIGV4cGxpY2F0aXZhcyBtw6FzIGxhIHZhcmlhYmxlIHJlc3B1ZXN0YS4iXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJDYWRhIHBhcsOhbWV0cm8gZGVsIG1vZGVsbyBzaXN0ZW3DoXRpY28gZXN0aW1hZG8gYSBwYXJ0aXIgZGUgbGEgbXVlc3RyYSBjb25zdW1lIHVuIGdyYWRvIGRlIGxpYmVydGFkIGRlIGxvcyBkYXRvcyBvcmlnaW5hbGVzLiIsImhpbnQiOiJQaWVuc2EgZW4gZWwgbsO6bWVybyB0b3RhbCBkZSBwYXLDoW1ldHJvcyBmaWpvcyBxdWUgZGViZW4gY2FsY3VsYXJzZSBlbiBsYSBjb21wb25lbnRlIHNpc3RlbcOhdGljYSBhbnRlcyBkZSBvYnRlbmVyIGxvcyByZXNpZHVvcy4ifSx7InF1ZXN0aW9uIjoiRW4gZWwgY29udHJhc3RlIGdsb2JhbCBkZSB1biBtb2RlbG8gZGUgcmVncmVzacOzbiBsaW5lYWwgbcO6bHRpcGxlIG1lZGlhbnRlIGVsIGVzdGFkw61zdGljbyAkRiQsIMK/Y3XDoWwgZXMgbGEgaGlww7N0ZXNpcyBudWxhICgkSF8wJCkgcXVlIHNlIHBvbmUgYSBwcnVlYmE/Iiwib3B0aW9ucyI6WyIkSF8wOiBSXjIgPSBSXjJfe1xcdGV4dHthanVzdGFkb319JCwgZXhwcmVzYW5kbyBxdWUgbm8gZXhpc3RlIHBlbmFsaXphY2nDs24gcG9yIGNvbXBsZWppZGFkIGVudHJlIG1vZGVsb3MuIiwiJEhfMDogXFxiZXRhXzAgPSBcXGJldGFfMSA9IFxcZG90cyA9IFxcYmV0YV9wID0gMCQsIGluZGljYW5kbyBxdWUgbGEgbWVkaWEgZGUgbGEgcmVzcHVlc3RhIGVzIGNlcm8gcGFyYSBjdWFscXVpZXIgb2JzZXJ2YWNpw7NuLiIsIiRIXzA6IFxcYmV0YV8xID0gXFxiZXRhXzIgPSBcXGRvdHMgPSBcXGJldGFfcCA9IDAkLCBsbyBxdWUgaW5kaWNhIHF1ZSBuaW5ndW5hIHZhcmlhYmxlIGV4cGxpY2F0aXZhIGFwb3J0YSBpbmZvcm1hY2nDs24gbGluZWFsIHNvYnJlIGxhIHJlc3B1ZXN0YS4iLCIkSF8wOiBcXGJldGFfMSBcXG5lIDAgXFx0ZXh0eyB5IH0gXFxiZXRhXzIgXFxuZSAwIFxcZG90cyBcXHRleHR7IHkgfSBcXGJldGFfcCBcXG5lIDAkLCBhZmlybWFuZG8gcXVlIHRvZG9zIGxvcyBjb2VmaWNpZW50ZXMgc29uIHNpZ25pZmljYXRpdm9zIHNpbXVsdMOhbmVhbWVudGUuIl0sImNvcnJlY3RJbmRleCI6MiwicmF0aW9uYWxlIjoiRXZhbMO6YSBzaSBlbCBjb25qdW50byBjb21wbGV0byBkZSBwcmVkaWN0b3JlcyBjYXJlY2UgZGUgY2FwYWNpZGFkIGV4cGxpY2F0aXZhIGNvbmp1bnRhLCByZWR1Y2llbmRvIGVsIG1vZGVsbyBhICRZX2kgPSBcXGJldGFfMCArIFxcdmFyZXBzaWxvbl9pJC4iLCJoaW50IjoiQ29uc2lkZXJhIGN1w6FsIGVzIGVsIG1vZGVsbyBtw6FzIHNpbXBsZSBwb3NpYmxlIChzb2xvIGNvbiBjb25zdGFudGUpIHF1ZSBzZSBvYnRpZW5lIGN1YW5kbyB0b2RvcyBsb3MgcHJlZGljdG9yZXMgY2FyZWNlbiBkZSBlZmVjdG8gbGluZWFsLiJ9LHsicXVlc3Rpb24iOiJBbmFsaXphbmRvIGxhIGNhcGFjaWRhZCBleHBsaWNhdGl2YSBkZWwgbW9kZWxvLCDCv2N1w6FsIGVzIGVsIGluY29udmVuaWVudGUgcHJpbmNpcGFsIGRlbCBjb2VmaWNpZW50ZSBkZSBkZXRlcm1pbmFjacOzbiAkUl4yJCBhIGxhIGhvcmEgZGUgY29tcGFyYXIgbW9kZWxvcyBkZSBkaXN0aW50YSBjb21wbGVqaWRhZD8iLCJvcHRpb25zIjpbIlN1cyB2YWxvcmVzIHB1ZWRlbiB0b21hciBtYWduaXR1ZGVzIG5lZ2F0aXZhcyBjdWFuZG8gZWwgbsO6bWVybyBkZSB2YXJpYWJsZXMgJHAkIHN1cGVyYSBhbCBuw7ptZXJvIGRlIG9ic2VydmFjaW9uZXMgJG4kLiIsIkVzIGV4dHJlbWFkYW1lbnRlIHNlbnNpYmxlIGEgbGFzIHVuaWRhZGVzIGRlIG1lZGlkYSBlbXBsZWFkYXMgZW4gbGEgdmFyaWFibGUgcmVzcHVlc3RhICRZJC4iLCJBc3VtZSBvYmxpZ2F0b3JpYW1lbnRlIHF1ZSBsb3MgdMOpcm1pbm9zIGRlIGVycm9yIGRlbCBtb2RlbG8gc2lndWVuIHVuYSBkaXN0cmlidWNpw7NuIG5vcm1hbCBjZW50cmFkYSBlbiBjZXJvLiIsIk51bmNhIGRpc21pbnV5ZSBhbCBpbmNvcnBvcmFyIG51ZXZhcyB2YXJpYWJsZXMgZXhwbGljYXRpdmFzLCBhdW5xdWUgZXN0YXMgYXBvcnRlbiBpbmZvcm1hY2nDs24gaXJyZWxldmFudGUuIl0sImNvcnJlY3RJbmRleCI6MywicmF0aW9uYWxlIjoiTGEgc3VtYSBkZSBjdWFkcmFkb3MgcmVzaWR1YWxlcyAkU0Nfe3Jlc30kIG5vIGF1bWVudGEgYWwgYcOxYWRpciB0w6lybWlub3MsIGxvIHF1ZSBoYWNlIHF1ZSAkUl4yJCBzZWEgbW9uw7N0b25hbWVudGUgbm8gZGVjcmVjaWVudGUgcmVzcGVjdG8gYWwgbsO6bWVybyBkZSBwcmVkaWN0b3Jlcy4iLCJoaW50IjoiUGllbnNhIGVuIHF1w6kgbGUgb2N1cnJlIGEgbGEgc3VtYSBkZSBjdWFkcmFkb3MgZGUgbG9zIHJlc2lkdW9zIGN1YW5kbyBhw7FhZGVzIGN1YWxxdWllciB2YXJpYWJsZSBhZGljaW9uYWwgYWwgY3JpdGVyaW8gZGUgbcOtbmltb3MgY3VhZHJhZG9zLiJ9LHsicXVlc3Rpb24iOiJBbCBpbnRlcnByZXRhciB1biBncsOhZmljbyBjdWFudGlsLWN1YW50aWwgKFEtUSBwbG90KSBkZSBsb3MgcmVzaWR1b3MgZGUgdW4gbW9kZWxvIGFqdXN0YWRvLCDCv3F1w6kgY29tcG9ydGFtaWVudG8gaW5kaWNhIHVuIGluY3VtcGxpbWllbnRvIGRlIGxhIGNvbmRpY2nDs24gZGUgbm9ybWFsaWRhZD8iLCJvcHRpb25zIjpbIlVuYSBhY3VtdWxhY2nDs24gc2ltw6l0cmljYSBkZSBwdW50b3MgYWxyZWRlZG9yIGRlIGxhIG1lZGlhbmEgZGUgbGEgZGlzdHJpYnVjacOzbiByZXNpZHVhbC4iLCJMYSBwcmVzZW5jaWEgZGUgdW5hIGFtcGxpdHVkIHZlcnRpY2FsIGNyZWNpZW50ZSBlbiBsb3MgcHVudG9zIGEgbWVkaWRhIHF1ZSBhdW1lbnRhbiBsb3MgY3VhbnRpbGVzIHRlw7NyaWNvcy4iLCJVbmEgZGlzdHJpYnVjacOzbiBlbiBsYSBxdWUgbG9zIHB1bnRvcyBzZSBzaXTDumFuIG1heW9yaXRhcmlhbWVudGUgc29icmUgbGEgcmVjdGEgZGlhZ29uYWwgdGXDs3JpY2EgY2VudHJhZGEgZW4gY2Vyby4iLCJVbmEgZGlzcG9zaWNpw7NuIGRlIGxvcyBwdW50b3MgcXVlIGRpYnVqYSB1bmEgY3VydmF0dXJhIHByb251bmNpYWRhIG8gZGVzdmlhY2lvbmVzIHNpc3RlbcOhdGljYXMgZnVlcmEgZGUgbGEgYmFuZGEgZGUgcmVmZXJlbmNpYSBlbiBsYXMgY29sYXMuIl0sImNvcnJlY3RJbmRleCI6MywicmF0aW9uYWxlIjoiTGFzIGRlc3ZpYWNpb25lcyByZXNwZWN0byBhIGxhIHJlY3RhIHRlw7NyaWNhIGluZGljYW4gcXVlIGxvcyBjdWFudGlsZXMgbXVlc3RyYWxlcyBkZSBsb3MgcmVzaWR1b3MgZGlmaWVyZW4gZGUgbG9zIGN1YW50aWxlcyB0ZcOzcmljb3MgZGUgbGEgZGlzdHJpYnVjacOzbiBub3JtYWwuIiwiaGludCI6IkPDqW50cmF0ZSBlbiBjw7NtbyBzZSBjb21wYXJhIGxhIGRpc3RyaWJ1Y2nDs24gZW1ww61yaWNhIGRlIGxvcyByZXNpZHVvcyBmcmVudGUgYSBsYSByZWN0YSBkZSByZWZlcmVuY2lhIGRlIGxhIGRpc3RyaWJ1Y2nDs24gdGXDs3JpY2EgJE4oMCwgXFxzaWdtYV4yKSQuIn0seyJxdWVzdGlvbiI6IkNvbnNpZGVyZSBlbCBtb2RlbG8gY29uIGludGVyYWNjacOzbiAkWV9pID0gXFxiZXRhXzAgKyBcXGJldGFfMSBYX3sxaX0gKyBcXGJldGFfMiBYX3syaX0gKyBcXGJldGFfMyBYX3sxaX1YX3syaX0gKyBcXHZhcmVwc2lsb25faSQuIMK/Q3XDoWwgZXMgZWwgY2FtYmlvIGVuIGVsIHZhbG9yIG1lZGlvIGRlICRZJCBwb3IgY2FkYSB1bmlkYWQgZGUgYXVtZW50byBlbiAkWF8xJD8iLCJvcHRpb25zIjpbIiRcXGJldGFfMSArIFxcYmV0YV8zIFhfMiQsIGxvIHF1ZSBzaWduaWZpY2EgcXVlIGVsIGVmZWN0byBkZSAkWF8xJCBkZXBlbmRlIGV4cGzDrWNpdGFtZW50ZSBkZWwgdmFsb3IgcXVlIHRvbWUgJFhfMiQuIiwiJFxcYmV0YV8xICsgXFxiZXRhXzMkLCBwZXJtYW5lY2llbmRvIGNvbnN0YW50ZSBwYXJhIGN1YWxxdWllciB2YWxvciBvYnNlcnZhZG8gZW4gbGEgbXVlc3RyYS4iLCIkXFxiZXRhXzEkLCBhY3R1YW5kbyBlbCB0w6lybWlubyAkXFxiZXRhXzMgWF8xIFhfMiQgw7puaWNhbWVudGUgY29tbyBjb3JyZWNjacOzbiBzb2JyZSBlbCBpbnRlcmNlcHRvIGRlbCBtb2RlbG8uIiwiJFxcYmV0YV8xIFxcY2RvdCBcXGJldGFfMyBYXzIkLCByZXByZXNlbnRhbmRvIHVuYSByZWxhY2nDs24gZGUgcHJvcG9yY2lvbmFsaWRhZCBtdWx0aXBsaWNhdGl2YSBlc3RyaWN0YS4iXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJBbCByZW9yZGVuYXIgbGEgZWN1YWNpw7NuIGNvbW8gJChcXGJldGFfMSArIFxcYmV0YV8zIFhfMikgWF8xJCwgc2Ugb2JzZXJ2YSBxdWUgbGEgcGVuZGllbnRlIHBhcmNpYWwgZGUgJFhfMSQgZXMgdW5hIGZ1bmNpw7NuIGxpbmVhbCBkZSAkWF8yJC4iLCJoaW50IjoiRmFjdG9yaXphIGxhIGV4cHJlc2nDs24gbGluZWFsIGRlbCBtb2RlbG8gcGFyYSBhaXNsYXIgZWwgZmFjdG9yIGNvbcO6biAkWF8xJCB5IGV4YW1pbmEgZWwgY29lZmljaWVudGUgcmVzdWx0YW50ZS4ifSx7InF1ZXN0aW9uIjoiQWwgY29tcGFyYXIgbW9kZWxvcyBhbHRlcm5hdGl2b3MgbWVkaWFudGUgbG9zIGNyaXRlcmlvcyBkZSBpbmZvcm1hY2nDs24gQUlDIHkgQklDLCDCv3F1w6kgZGlmZXJlbmNpYSBwcsOhY3RpY2EgbG9zIGNhcmFjdGVyaXphIGVuIGxhIHNlbGVjY2nDs24gZGUgdmFyaWFibGVzPyIsIm9wdGlvbnMiOlsiUGFyYSBlbCBjcml0ZXJpbyBBSUMgbG9zIG1vZGVsb3MgcHJlZmVyaWJsZXMgc29uIGFxdWVsbG9zIGNvbiB2YWxvcmVzIG3DoXMgYWx0b3MsIG1pZW50cmFzIHF1ZSBwYXJhIEJJQyBzZSBwcmVmaWVyZW4gdmFsb3JlcyBtw6FzIGJham9zLiIsIkVsIGNyaXRlcmlvIEJJQyBpbXBvbmUgZ2VuZXJhbG1lbnRlIHVuYSBwZW5hbGl6YWNpw7NuIG3DoXMgc2V2ZXJhIHBvciBjYWRhIHBhcsOhbWV0cm8gYWRpY2lvbmFsLCBmYXZvcmVjaWVuZG8gbW9kZWxvcyBtw6FzIHBhcnNpbW9uaW9zb3MgcXVlIGVsIEFJQy4iLCJFbCBCSUMgc29sbyBzZSBwdWVkZSBhcGxpY2FyIHNpIGxhIHZhcmlhYmxlIHJlc3B1ZXN0YSBlcyBjdWFsaXRhdGl2YSBiaW5hcmlhLiIsIkVsIEFJQyBzZWxlY2Npb25hIHNpZW1wcmUgZWwgbW9kZWxvIGNvbiBtYXlvciBuw7ptZXJvIGRlIHBhcsOhbWV0cm9zLCBtaWVudHJhcyBxdWUgZWwgQklDIHJlcXVpZXJlIHNlbGVjY2lvbmFyIG1vZGVsb3MgY29uICRSXjIgPSAxJC4iXSwiY29ycmVjdEluZGV4IjoxLCJyYXRpb25hbGUiOiJCSUMgcG9uZGVyYSBsYSBjb21wbGVqaWRhZCBpbmNsdXllbmRvIGVsIHRhbWHDsW8gZGUgbGEgbXVlc3RyYSAkXFxsbihuKSQsIHBlbmFsaXphbmRvIG3DoXMgZnVlcnRlbWVudGUgbG9zIHBhcsOhbWV0cm9zIGFkaWNpb25hbGVzIGVuIG11ZXN0cmFzIG1lZGlhbmFzIG8gZ3JhbmRlcy4iLCJoaW50IjoiQW1ib3MgYnVzY2FuIHVuIHZhbG9yIG3DrW5pbW8sIHBlcm8gY29uc2lkZXJhIGN1w6FsIGRlIGxvcyBkb3MgY3JpdGVyaW9zIGludHJvZHVjZSB1biBjYXN0aWdvIG3DoXMgZXN0cmljdG8gY29uZm9ybWUgZWwgdGFtYcOxbyBtdWVzdHJhbCBjcmVjZS4ifSx7InF1ZXN0aW9uIjoiRW4gbGEgZXZhbHVhY2nDs24gZ3LDoWZpY2EgZGUgdW4gbW9kZWxvIGRlIHJlZ3Jlc2nDs24sIMK/cXXDqSBwYXRyw7NuIGVuIGVsIGdyw6FmaWNvIGRlIHJlc2lkdW9zIGZyZW50ZSBhIHZhbG9yZXMgYWp1c3RhZG9zICgkXFxoYXR7XFx2YXJlcHNpbG9ufV9pJCBmcmVudGUgYSAkXFxoYXR7eX1faSQpIHJldmVsYSB1biBwcm9ibGVtYSBkZSBoZXRlcm9jZWRhc3RpY2lkYWQ/Iiwib3B0aW9ucyI6WyJVbmEgZGlzcGVyc2nDs24gdmVydGljYWwgZGUgbG9zIHJlc2lkdW9zIHF1ZSBhdW1lbnRhIG8gZGlzbWludXllIGRlIGZvcm1hIHNpc3RlbcOhdGljYSBjb24gbGEgbWFnbml0dWQgZGUgbG9zIHZhbG9yZXMgYWp1c3RhZG9zIChmb3JtYSBkZSBlbWJ1ZG8pLiIsIlVuYSB0cmF5ZWN0b3JpYSBkZSBsb3MgcmVzaWR1b3MgY29uIHRlbmRlbmNpYSBtYXJjYWRhbWVudGUgcGFyYWLDs2xpY2EgbyBlbiBmb3JtYSBkZSAnVScuIiwiVW5hIGNvcnJlbGFjacOzbiBkZSByZXNpZHVvcyB2ZWNpbm9zIHF1ZSBtdWVzdHJhbiBwYXRyb25lcyBvc2NpbGF0b3Jpb3Mgb3JkZW5hZG9zIGVuIGVsIHRpZW1wby4iLCJVbmEgbnViZSBhbGVhdG9yaWEgZGUgcHVudG9zIGRpc3RyaWJ1aWRhIGhvbW9nw6luZWFtZW50ZSBhbHJlZGVkb3IgZGUgbGEgbMOtbmVhIGhvcml6b250YWwgZGUgY2Vyby4iXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJMYSB2YXJpYWNpw7NuIGVuIGVsIGFuY2hvIGRlIGxhIG51YmUgZGUgcHVudG9zIGV2aWRlbmNpYSBxdWUgbGEgdmFyaWFuemEgcmVzaWR1YWwgJFxcdGV4dHtWYXJ9KFxcdmFyZXBzaWxvbl9pKSA9IFxcc2lnbWFeMiQgbm8gZXMgY29uc3RhbnRlIGEgbG8gbGFyZ28gZGVsIHJhbmdvIGRlIHByZWRpY2Npw7NuLiIsImhpbnQiOiJMYSBob21vY2VkYXN0aWNpZGFkIGV4aWdlIHZhcmlhbnphIGNvbnN0YW50ZSBkZSBsb3MgZXJyb3JlczsgYnVzY2EgZWwgcGF0csOzbiB2aXN1YWwgcXVlIHJlcHJlc2VudGEgdmFyaWFiaWxpZGFkIG5vIHVuaWZvcm1lLiJ9LHsicXVlc3Rpb24iOiJFbiBlbCBtb2RlbG8gYWp1c3RhZG8gYFBlc28gfiBFZGFkICsgVmVyZHVyYXNgLCBzZSBvYnRpZW5lIHVuIGNvZWZpY2llbnRlIGVzdGltYWRvIHBhcmEgYFZlcmR1cmFzYCBkZSAkLTh7LH01MjEyJCBrZy9rZy4gwr9DdcOhbCBlcyBsYSBpbnRlcnByZXRhY2nDs24gZXN0YWTDrXN0aWNhbWVudGUgYWRlY3VhZGEgZGUgZXN0ZSByZXN1bHRhZG8/Iiwib3B0aW9ucyI6WyJDYWRhIGHDsW8gYWRpY2lvbmFsIGRlIGVkYWQgcHJvdm9jYSB1bmEgcmVkdWNjacOzbiBkZWwgcGVzbyBlcXVpdmFsZW50ZSBhICQ4eyx9NTIkIGtnIGFqdXN0YWRvIHBvciB2ZXJkdXJhcy4iLCJFbCBwZXNvIG1lZGlvIGVzcGVyYWRvIGRlIHVuIGluZGl2aWR1byBkZSBjZXJvIGHDsW9zIHF1ZSBubyBjb25zdW1lIHZlcmR1cmFzIGVzIGRlICQtOHssfTUyJCBrZy4iLCJFbCBjb25zdW1vIGVsZXZhZG8gZGUgdmVyZHVyYXMgcHJvZHVjZSBkaXJlY3RhbWVudGUgdW5hIHDDqXJkaWRhIGRlIHBlc28gZGUgJDh7LH01MiQga2cgZW4gbG9zIG5pw7FvcyBhbmFsaXphZG9zLiIsIk1hbnRlbmllbmRvIGNvbnN0YW50ZSBsYSBlZGFkLCB1biBpbmNyZW1lbnRvIGRlIDEga2cgZW4gZWwgY29uc3VtbyBkaWFyaW8gZGUgdmVyZHVyYXMgc2UgYXNvY2lhIGEgdW5hIGRpc21pbnVjacOzbiBtZWRpYSBlc3RpbWFkYSBkZSAkOHssfTUyJCBrZyBlbiBlbCBwZXNvLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkV4cHJlc2EgY29ycmVjdGFtZW50ZSBsYSBhc29jaWFjacOzbiBhanVzdGFkYSBjb25kaWNpb25hbCBlbiBsYXMgdW5pZGFkZXMgb3JpZ2luYWxlcyB5IG1hbnRlbmllbmRvIGNvbnN0YW50ZSBlbCBvdHJvIHByZWRpY3RvciBkZWwgbW9kZWxvLiIsImhpbnQiOiJBc2Vnw7pyYXRlIGRlIGRpZmVyZW5jaWFyIGVudHJlIHVuYSBhc29jaWFjacOzbiBhanVzdGFkYSBlbiBkYXRvcyBvYnNlcnZhY2lvbmFsZXMgeSB1bmEgY2F1c2FsaWRhZCwgbWFudGVuaWVuZG8gZmlqb3MgbG9zIGRlbcOhcyBwcmVkaWN0b3Jlcy4ifSx7InF1ZXN0aW9uIjoiRW4gZWwgcHJvY2VkaW1pZW50byBkZSBzZWxlY2Npw7NuIGF1dG9tw6F0aWNhIGRlIHZhcmlhYmxlcyBoYWNpYSBhdHLDoXMgKCpiYWNrd2FyZCBlbGltaW5hY2nDs24qKSwgwr9jdcOhbCBlcyBsYSBzZWN1ZW5jaWEgYsOhc2ljYSBxdWUgc2Ugc2lndWUgcGFyYSBkZXRlcm1pbmFyIGVsIG1vZGVsbyBmaW5hbD8iLCJvcHRpb25zIjpbIlBhcnRpciBkZSB1biBtb2RlbG8gcXVlIMO6bmljYW1lbnRlIGNvbnRpZW5lIGVsIGludGVyY2VwdG8gZSBpbmNvcnBvcmFyIHBhdWxhdGluYW1lbnRlIHZhcmlhYmxlcyBzZWfDum4gZWwgdmFsb3IgbcOhcyBhbHRvIGRlbCBlc3RhZMOtc3RpY28gJHQkLiIsIkVsaW1pbmFyIGRlIGZvcm1hIHNpbXVsdMOhbmVhIGVuIGVsIHByaW1lciBwYXNvIHRvZGFzIGxhcyB2YXJpYWJsZXMgY3V5b3MgY29lZmljaWVudGVzIGluZGl2aWR1YWxlcyBwcmVzZW50ZW4gJHAgPiAweyx9MDUkLiIsIkV2YWx1YXIgZGUgZm9ybWEgaW5kZXBlbmRpZW50ZSBsYXMgY29ycmVsYWNpb25lcyBzaW1wbGVzIGRlIGNhZGEgcHJlZGljdG9yIGNvbiBsYSByZXNwdWVzdGEgeSBjb25zZXJ2YXIgbG9zIHF1ZSB0ZW5nYW4gJHIgPiAweyx9NTAkLiIsIkNvbWVuemFyIGNvbiBlbCBtb2RlbG8gcXVlIGluY2x1eWUgdG9kb3MgbG9zIHTDqXJtaW5vcyBjYW5kaWRhdG9zIHkgZWxpbWluYXIgaXRlcmF0aXZhbWVudGUgYXF1ZWxsb3MgY3V5YSByZXRpcmFkYSBtZWpvcmUgZWwgY3JpdGVyaW8gZGUgYWp1c3RlL2NvbXBsZWppZGFkLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkluaWNpYSBkZXNkZSBsYSBlc3RydWN0dXJhIG3DoXhpbWEgKG1vZGVsbyBzYXR1cmFkbykgeSBzaW1wbGlmaWNhIHJlZHVjaWVuZG8gc3VjZXNpdmFtZW50ZSBsb3MgdMOpcm1pbm9zIG1lbm9zIHJlbGV2YW50ZXMgaGFzdGEgb3B0aW1pemFyIGxhIG3DqXRyaWNhIChlai4gQUlDKS4iLCJoaW50IjoiRWwgbm9tYnJlICdiYWNrd2FyZCcgKGhhY2lhIGF0csOhcykgc3VnaWVyZSBlbXBlemFyIGRlc2RlIGxhIG3DoXhpbWEgY29tcGxlamlkYWQgcG9zaWJsZSBlIGlyIGRlc251ZGFuZG8gZWwgbW9kZWxvIHBhc28gYSBwYXNvLiJ9XQ==')).getDataAsString('UTF-8'));
const QUIZ_TITLE = 'Regresión lineal múltiple';
const QUIZ_DESCRIPTION = 'Comprueba cómo interpretar los coeficientes, evaluar los supuestos y comparar modelos de regresión lineal múltiple.';
const RESPONSE_BOOK_KEY = 'EIB_REGRESSION_RESPONSE_SHEET_ID';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Cuestionario de práctica: regresión lineal múltiple')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupRegressionQuiz_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(RESPONSE_BOOK_KEY);
  if (savedId) {
    const saved = SpreadsheetApp.openById(savedId);
    Logger.log('Hoja de respuestas: ' + saved.getUrl());
    return saved.getUrl();
  }

  const spreadsheet = SpreadsheetApp.create('Resultados — EIB — Regresión lineal múltiple');
  const bank = spreadsheet.getSheets()[0];
  bank.setName('Preguntas');
  const bankHeaders = ['Pregunta', 'Opción A', 'Opción B', 'Opción C', 'Opción D', 'Respuesta correcta', 'Explicación', 'Pista'];
  bank.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
  const bankRows = REGRESSION_QUESTIONS.map(question => [
    question.question,
    ...question.options,
    String.fromCharCode(65 + question.correctIndex),
    question.rationale || '',
    question.hint || ''
  ]);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setValues(bankRows);
  bank.setFrozenRows(1);
  bank.getRange(1, 1, 1, bankHeaders.length)
    .setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  bank.setColumnWidth(1, 540);
  bank.setColumnWidths(2, 4, 340);
  bank.setColumnWidth(6, 160);
  bank.setColumnWidth(7, 540);
  bank.setColumnWidth(8, 420);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setWrap(true).setVerticalAlignment('top');

  const responses = spreadsheet.insertSheet('Respuestas');
  const headers = ['Fecha y hora', 'Nombre y apellidos', 'Puntuación', 'Aciertos'];
  bankRows.forEach((question, index) => {
    headers.push('P' + (index + 1) + ' respuesta');
    headers.push('P' + (index + 1) + ' correcta');
  });
  responses.getRange(1, 1, 1, headers.length).setValues([headers]);
  responses.setFrozenRows(1);
  responses.getRange(1, 1, 1, headers.length)
    .setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  responses.setColumnWidth(1, 160);
  responses.setColumnWidth(2, 220);
  responses.setColumnWidth(3, 100);
  responses.setColumnWidth(4, 100);

  const summary = spreadsheet.insertSheet('Resumen');
  summary.getRange('A1:B3').setValues([
    ['Cuestionario', QUIZ_TITLE],
    ['Intentos recibidos', ''],
    ['Puntuación media', '']
  ]);
  summary.getRange('B2').setFormula('=COUNTA(Respuestas!B2:B)');
  summary.getRange('B3').setFormula('=IFERROR(AVERAGE(Respuestas!C2:C),0)');
  summary.getRange('A5:C5').setValues([['Pregunta', 'Respuestas', 'Porcentaje de acierto']]);
  REGRESSION_QUESTIONS.forEach((question, index) => {
    const responseColumn = 5 + index * 2;
    const correctColumn = responseColumn + 1;
    const responseLetter = columnLetter_(responseColumn);
    const correctLetter = columnLetter_(correctColumn);
    const row = 6 + index;
    summary.getRange(row, 1).setValue((index + 1) + '. ' + plainText_(question.question));
    summary.getRange(row, 2).setFormula('=COUNTA(Respuestas!' + responseLetter + '2:' + responseLetter + ')');
    summary.getRange(row, 3).setFormula('=IFERROR(COUNTIF(Respuestas!' + correctLetter + '2:' + correctLetter + ',TRUE)/B' + row + ',0)');
  });
  summary.getRange('A1:C1').setFontWeight('bold').setFontColor('#2b5876');
  summary.getRange('A5:C5').setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  summary.getRange(6, 3, REGRESSION_QUESTIONS.length, 1).setNumberFormat('0%');
  summary.setFrozenRows(5);
  summary.setColumnWidth(1, 680);
  summary.setColumnWidth(2, 120);
  summary.setColumnWidth(3, 180);

  properties.setProperty(RESPONSE_BOOK_KEY, spreadsheet.getId());
  Logger.log('Hoja de respuestas creada: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

function getQuiz() {
  const questions = loadQuestions_();
  return {
    title: QUIZ_TITLE,
    description: QUIZ_DESCRIPTION,
    questions: questions.map((question, index) => ({
      number: index + 1,
      question: mathText_(question.question),
      options: question.options.map(mathText_)
    }))
  };
}

function submitQuiz(payload) {
  if (!payload || typeof payload.name !== 'string' || !Array.isArray(payload.answers)) {
    throw new Error('No se han recibido las respuestas completas. Recarga el cuestionario e inténtalo de nuevo.');
  }
  const name = payload.name.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!name || name.length > 100) throw new Error('Escribe tu nombre y apellidos (máximo 100 caracteres).');
  const questions = loadQuestions_();
  if (payload.answers.length !== questions.length) throw new Error('Falta alguna respuesta.');
  const answers = payload.answers.map((answer, index) => {
    const value = Number(answer);
    if (!Number.isInteger(value) || value < 0 || value >= questions[index].options.length) {
      throw new Error('Hay una respuesta no válida en la pregunta ' + (index + 1) + '.');
    }
    return value;
  });

  const results = questions.map((question, index) => ({
    number: index + 1,
    question: question.question,
    selectedIndex: answers[index],
    selectedText: question.options[answers[index]],
    correctIndex: question.correctIndex,
    correctText: question.options[question.correctIndex],
    correct: answers[index] === question.correctIndex,
    rationale: question.rationale,
    hint: question.hint
  }));
  const score = results.filter(item => item.correct).length;
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const spreadsheet = openResponseBook_();
    const sheet = spreadsheet.getSheetByName('Respuestas');
    const row = [new Date(), safeSheetText_(name), score, score];
    results.forEach(item => {
      row.push(String.fromCharCode(65 + item.selectedIndex), item.correct);
    });
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }
  return {score, total: questions.length, results};
}

function loadQuestions_() {
  const sheet = openResponseBook_().getSheetByName('Preguntas');
  if (!sheet || sheet.getLastRow() < 2) throw new Error('No se han encontrado preguntas en la hoja Preguntas.');
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 8).getValues()
    .filter(row => String(row[0] || '').trim())
    .map((row, index) => {
      const options = row.slice(1, 5).map(value => String(value || ''));
      const correctIndex = String(row[5] || '').trim().toUpperCase().charCodeAt(0) - 65;
      if (options.some(option => !option.trim()) || correctIndex < 0 || correctIndex >= options.length) {
        throw new Error('Revisa las cuatro opciones y la respuesta correcta de la pregunta ' + (index + 1) + ' en la hoja Preguntas.');
      }
      return {question:String(row[0]), options, correctIndex, rationale:String(row[6] || ''), hint:String(row[7] || '')};
    });
}

function openResponseBook_() {
  const id = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!id) throw new Error('Primero ejecuta setupRegressionQuiz_ para crear la hoja de respuestas.');
  return SpreadsheetApp.openById(id);
}

function mathText_(value) {
  return String(value || '').replace(/(?:\t|\\)text\{/g, '\\text{');
}

function plainText_(value) {
  return String(value || '').replace(/\$([^$]+)\$/g, '$1').replace(/\\text\{([^}]*)\}/g, '$1');
}

function safeSheetText_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function columnLetter_(column) {
  let letter = '';
  while (column > 0) {
    const remainder = (column - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    column = Math.floor((column - 1) / 26);
  }
  return letter;
}
