const ANOVA_QUESTIONS = JSON.parse(Utilities.newBlob(Utilities.base64Decode('W3sicXVlc3Rpb24iOiLCv1BvciBxdcOpIG5vIHJlc3VsdGEgYWRlY3VhZG8gcmVhbGl6YXIgbcO6bHRpcGxlcyBjb250cmFzdGVzIGRlIGhpcMOzdGVzaXMgaW5kZXBlbmRpZW50ZXMgcG9yIHBhcmVqYXMgKGNvbW8gcHJ1ZWJhcyAkdCQgZGUgU3R1ZGVudCkgcGFyYSBjb21wYXJhciBsYXMgbWVkaWFzIGRlIHRyZXMgbyBtw6FzIGdydXBvcyBlbiBsdWdhciBkZSBhcGxpY2FyIHVuIEFOT1ZBPyIsIm9wdGlvbnMiOlsiUG9ycXVlIHJlZHVjZSBsYSBwb3RlbmNpYSBlc3RhZMOtc3RpY2EgZGVsIGVzdHVkaW8gYWwgbm8gY29uc2lkZXJhciBlbCB0YW1hw7FvIG11ZXN0cmFsIHRvdGFsICROJCBlbiBlbCBjw6FsY3VsbyBkZSBjYWRhIG1lZGlhLiIsIlBvcnF1ZSBpbnZhbGlkYSBlbCBzdXB1ZXN0byBkZSBob21vY2VkYXN0aWNpZGFkIGFsIGNhbGN1bGFyIHZhcmlhbnphcyBtdWVzdHJhbGVzIHNlcGFyYWRhcyBwYXJhIGNhZGEgcGFyZWphIGRlIGdydXBvcy4iLCJQb3JxdWUgZXhpZ2UgZXN0cmljdGFtZW50ZSBxdWUgdG9kb3MgbG9zIGdydXBvcyBhbmFsaXphZG9zIHRlbmdhbiBleGFjdGFtZW50ZSBlbCBtaXNtbyBuw7ptZXJvIGRlIG9ic2VydmFjaW9uZXMgKCRuXzEgPSBuXzIgPSBcXGRvdHMgPSBuX2skKS4iLCJQb3JxdWUgaW5jcmVtZW50YSBzdXN0YW5jaWFsbWVudGUgbGEgcHJvYmFiaWxpZGFkIGdsb2JhbCBkZSBjb21ldGVyIGFsIG1lbm9zIHVuIGVycm9yIGRlIFRpcG8gSSBhbCBkZXRlY3RhciBkaWZlcmVuY2lhcyBmYWxzYW1lbnRlIHNpZ25pZmljYXRpdmFzIHBvciBhemFyLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IlJlYWxpemFyIG3Dumx0aXBsZXMgY29udHJhc3RlcyBhY3VtdWxhIGVsIG5pdmVsIGRlIHNpZ25pZmljYWNpw7NuIGluZGl2aWR1YWwsIGxvIHF1ZSBlbGV2YSBlbCByaWVzZ28gZ2xvYmFsIGRlIGNvbWV0ZXIgYWwgbWVub3MgdW4gZXJyb3IgZGUgVGlwbyBJIGVuIGVsIGNvbmp1bnRvIGRlbCBleHBlcmltZW50by4iLCJoaW50IjoiUGllbnNhIGVuIGxvIHF1ZSBsZSBvY3VycmUgYSBsYSB0YXNhIGdsb2JhbCBkZSBlcnJvciBjdWFuZG8gc2UgcmVhbGl6YW4gdmFyaW9zIGNvbnRyYXN0ZXMgZXN0YWTDrXN0aWNvcyBzaW11bHTDoW5lb3MuIn0seyJxdWVzdGlvbiI6IkVuIGVsIGNvbnRleHRvIGRlbCBkaXNlw7FvIGRlIGV4cGVyaW1lbnRvcyBwYXJhIHVuIEFOT1ZBIGRlIHVuYSB2w61hLCDCv2N1w6FsIGVzIGxhIGRpZmVyZW5jaWEgZnVuZGFtZW50YWwgZW50cmUgdW5hIHLDqXBsaWNhIHkgdW5hIG1lZGljacOzbiByZXBldGlkYT8iLCJvcHRpb25zIjpbIlVuYSByw6lwbGljYSBzaXJ2ZSBwYXJhIGNhbGN1bGFyIGxhIHZhcmlhYmlsaWRhZCBlbnRyZSBncnVwb3MsIG1pZW50cmFzIHF1ZSBsYSBtZWRpY2nDs24gcmVwZXRpZGEgY3VhbnRpZmljYSDDum5pY2FtZW50ZSBsYSB2YXJpYWJpbGlkYWQgaW50cmEtZ3J1cG9zLiIsIlVuYSByw6lwbGljYSBhcGxpY2EgZWwgdHJhdGFtaWVudG8gYSBkaXN0aW50YXMgdW5pZGFkZXMgZXhwZXJpbWVudGFsZXMgaW5kZXBlbmRpZW50ZXMsIG1pZW50cmFzIHF1ZSB1bmEgbWVkaWNpw7NuIHJlcGV0aWRhIHRvbWEgbcO6bHRpcGxlcyBkYXRvcyBkZSBsYSBtaXNtYSB1bmlkYWQgZXhwZXJpbWVudGFsLiIsIlVuYSByw6lwbGljYSByZXF1aWVyZSBxdWUgZWwgZmFjdG9yIHRlbmdhIGFsIG1lbm9zIHRyZXMgbml2ZWxlcywgbWllbnRyYXMgcXVlIHVuYSBtZWRpY2nDs24gcmVwZXRpZGEgc2UgYXBsaWNhIHNvbG8gZW4gZGlzZcOxb3MgZGUgZG9zIG5pdmVsZXMuIiwiTGEgcsOpcGxpY2EgaW5jcmVtZW50YSBsb3MgZ3JhZG9zIGRlIGxpYmVydGFkIGRlbCBkZW5vbWluYWRvciwgbWllbnRyYXMgcXVlIGxhIG1lZGljacOzbiByZXBldGlkYSBzb2xvIG1vZGlmaWNhIGxvcyBkZWwgbnVtZXJhZG9yLiJdLCJjb3JyZWN0SW5kZXgiOjEsInJhdGlvbmFsZSI6IkxhIHLDqXBsaWNhIGdhcmFudGl6YSB1bmlkYWRlcyBpbmRlcGVuZGllbnRlcyBwYXJhIGVzdGltYXIgbGEgdmFyaWFiaWxpZGFkIGFsZWF0b3JpYSBwdXJhLCBhIGRpZmVyZW5jaWEgZGUgbWVkaXIgdmFyaWFzIHZlY2VzIGxhIG1pc21hIHVuaWRhZC4iLCJoaW50IjoiQ29uc2lkZXJhIGxhIGluZGVwZW5kZW5jaWEgZGUgbGFzIHVuaWRhZGVzIGV4cGVyaW1lbnRhbGVzIGZyZW50ZSBhIHRvbWFyIG3Dumx0aXBsZXMgb2JzZXJ2YWNpb25lcyBzb2JyZSB1biBtaXNtbyBlbGVtZW50by4ifSx7InF1ZXN0aW9uIjoiRW4gbGEgZGVzY29tcG9zaWNpw7NuIGRlIGxhIHZhcmlhYmlsaWRhZCBkZWwgQU5PVkEgZGUgdW5hIHbDrWEgKCRTQ197XFx0ZXh0e1RvdGFsfX0gPSBTQ197XHRleHR7RW50cmV9fSArIFNDX3tcdGV4dHtJbnRyYX19JCksIMK/cXXDqSBjdWFudGlmaWNhIGNvbmNyZXRhbWVudGUgbGEgU3VtYSBkZSBDdWFkcmFkb3MgRW50cmUgZ3J1cG9zICgkU0Nfe1x0ZXh0e0VudHJlfX0kKT8iLCJvcHRpb25zIjpbIkxhIGRpZmVyZW5jaWEgYWwgY3VhZHJhZG8gZW50cmUgbGEgbWVkaWEgbXVlc3RyYWwgZGUgY2FkYSBncnVwbyB5IGxhIG1lZGlhIGdsb2JhbCwgcG9uZGVyYWRhIHBvciBlbCB0YW1hw7FvIGRlbCBncnVwbyAkbl9pJC4iLCJMYSB2YXJpYWJpbGlkYWQgZGVsIHTDqXJtaW5vIGRlIGVycm9yIGFsZWF0b3JpbyAkXFx2YXJlcHNpbG9uX3tpan0kIGNvbcO6biBhIHRvZGFzIGxhcyB1bmlkYWRlcyBleHBlcmltZW50YWxlcyBkZWwgbW9kZWxvLiIsIkxhIGRpc3BlcnNpw7NuIGN1YWRyw6F0aWNhIGRlIGNhZGEgb2JzZXJ2YWNpw7NuIGluZGl2aWR1YWwgJFlfe2lqfSQgcmVzcGVjdG8gYSBsYSBtZWRpYSBlc3RpbWFkYSBkZSBzdSBwcm9waW8gZ3J1cG8gJFxcYmFye1l9X3tpXFxjZG90fSQuIiwiTGEgdmFyaWFuemEgbXVlc3RyYWwgdG90YWwgb2JzZXJ2YWRhIGVuIGxhIHZhcmlhYmxlIHJlc3B1ZXN0YSBtdWx0aXBsaWNhZGEgcG9yIGVsIG7Dum1lcm8gdG90YWwgZGUgZ3J1cG9zICRrJC4iXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJFc3RhIG1hZ25pdHVkIG1pZGUgY3XDoW50byBzZSBhbGVqYW4gbGFzIG1lZGlhcyBkZSBsb3MgZ3J1cG9zIHJlc3BlY3RvIGEgbGEgbWVkaWEgZ2VuZXJhbCBkZWwgY29uanVudG8gZGUgb2JzZXJ2YWNpb25lcy4iLCJoaW50IjoiRsOtamF0ZSBlbiBsYXMgZGVzdmlhY2lvbmVzIHF1ZSB1dGlsaXphIGVzdGEgc3VtYSBkZSBjdWFkcmFkb3M6IGRpc3RhbmNpYXMgZW50cmUgbGFzIG1lZGlhcyBkZWwgZ3J1cG8geSB1bmEgbWVkaWEgY2VudHJhbCBkZSB0b2RvIGVsIGNvbmp1bnRvIGRlIGRhdG9zLiJ9LHsicXVlc3Rpb24iOiJBbCBmb3JtdWxhciB1biBBTk9WQSBkZSB1biBmYWN0b3IgY29uICRrJCBuaXZlbGVzIGNvbW8gdW4gbW9kZWxvIGxpbmVhbCAkWV9pID0gXFxiZXRhXzAgKyBcXGJldGFfMSBYX3sxaX0gKyBcXGRvdHMgKyBcXGJldGFfe2stMX0gWF97KGstMSlpfSArIFxcdmFyZXBzaWxvbl9pJCB1c2FuZG8gdmFyaWFibGVzIGluZGljYWRvcmFzIChkdW1teSksIMK/Y8OzbW8gc2UgaW50ZXJwcmV0YSBlbCBjb2VmaWNpZW50ZSAkXFxiZXRhX2okPyIsIm9wdGlvbnMiOlsiUmVwcmVzZW50YSBsYSBtZWRpYSBwb2JsYWNpb25hbCBkaXJlY3RhIHkgYWJzb2x1dGEgZGUgbGFzIG9ic2VydmFjaW9uZXMgcGVydGVuZWNpZW50ZXMgYWwgZ3J1cG8gJGorMSQuIiwiUmVwcmVzZW50YSBsYSBkaWZlcmVuY2lhIGVudHJlIGxhIG1lZGlhIHBvYmxhY2lvbmFsIGRlbCBncnVwbyAkaisxJCB5IGxhIG1lZGlhIHBvYmxhY2lvbmFsIGRlbCBncnVwbyBkZSByZWZlcmVuY2lhLiIsIlJlcHJlc2VudGEgbGEgZGVzdmlhY2nDs24gZXN0w6FuZGFyIGludHJhLWdydXBvIGFzb2NpYWRhIGEgbGFzIHVuaWRhZGVzIGRlbCBuaXZlbCAkaisxJC4iLCJSZXByZXNlbnRhIGVsIGNvY2llbnRlIGVudHJlIGxhIG1lZGlhIG11ZXN0cmFsIGRlbCBncnVwbyAkaisxJCB5IGxhIG1lZGlhIGdsb2JhbCBkZSB0b2RhcyBsYXMgb2JzZXJ2YWNpb25lcy4iXSwiY29ycmVjdEluZGV4IjoxLCJyYXRpb25hbGUiOiJFbiBsYSBjb2RpZmljYWNpw7NuIGNvbiB2YXJpYWJsZXMgaW5kaWNhZG9yYXMsIGxhIGNvbnN0YW50ZSBlcyBsYSBtZWRpYSBkZWwgZ3J1cG8gZGUgcmVmZXJlbmNpYSB5IGNhZGEgY29lZmljaWVudGUgbWlkZSBlbCBpbmNyZW1lbnRvIG8gZGVjcmVtZW50byByZXNwZWN0byBhIGVsbGEuIiwiaGludCI6IlJlY3VlcmRhIHF1ZSBsYSBjYXRlZ29yw61hIHF1ZSBubyB0aWVuZSB2YXJpYWJsZSBpbmRpY2Fkb3JhIGFzb2NpYWRhIGFjdMO6YSBjb21vIG5pdmVsIGRlIHJlZmVyZW5jaWEuIn0seyJxdWVzdGlvbiI6IkVuIGxhIGluZmVyZW5jaWEgZGVsIEFOT1ZBLCDCv2N1w6FsIGVzIGxhIGludGVycHJldGFjacOzbiBmb3JtYWwgZGVsICRwJC12YWxvciBhc29jaWFkbyBhbCBlc3RhZMOtc3RpY28gZGUgY29udHJhc3RlICRGX3tcXHRleHR7b2JzfX0kPyIsIm9wdGlvbnMiOlsiRXMgbGEgcHJvYmFiaWxpZGFkIGRlIHF1ZSBsYSBoaXDDs3Rlc2lzIG51bGEgJEhfMDogXFxtdV8xID0gXFxtdV8yID0gXFxkb3RzID0gXFxtdV9rJCBzZWEgZmFsc2EgZGFkb3MgbG9zIGRhdG9zIG9ic2VydmFkb3MuIiwiRXMgbGEgcHJvYmFiaWxpZGFkIGRlIGNvbWV0ZXIgdW4gZXJyb3IgZGUgVGlwbyBJSSBhbCByZWNoYXphciBxdWUgYWwgbWVub3MgdW5hIG1lZGlhIGVzIGRpZmVyZW50ZSBkZSBsYXMgZGVtw6FzLiIsIkVzIGxhIHByb2JhYmlsaWRhZCBkZSBvYnRlbmVyIHVuIGVzdGFkw61zdGljbyAkRiQgaWd1YWwgbyBtYXlvciBxdWUgJEZfe1xcdGV4dHtvYnN9fSQsIGFzdW1pZW5kbyBxdWUgbGEgaGlww7N0ZXNpcyBudWxhIGRlIGlndWFsZGFkIGRlIG1lZGlhcyBlcyBjaWVydGEuIiwiRXMgbGEgcHJvcG9yY2nDs24gZGUgdmFyaWFiaWxpZGFkIHRvdGFsIHF1ZSBxdWVkYSBleHBsaWNhZGEgcG9yIGxhcyBkaWZlcmVuY2lhcyBleGlzdGVudGVzIGVudHJlIGxhcyBtZWRpYXMgZGUgbG9zIGdydXBvcy4iXSwiY29ycmVjdEluZGV4IjoyLCJyYXRpb25hbGUiOiJFbCAkcCQtdmFsb3IgbWlkZSBsYSBjb2xhIGRlcmVjaGEgZGUgbGEgZGlzdHJpYnVjacOzbiAkRl97ay0xLCBOLWt9JCBhIHBhcnRpciBkZWwgdmFsb3Igb2JzZXJ2YWRvIGJham8gZWwgc3VwdWVzdG8gZGUgcXVlICRIXzAkIGVzIHZlcmRhZGVyYS4iLCJoaW50IjoiUmVjdWVyZGEgcXVlIHNlIGV2YWzDumEgbGEgcHJvYmFiaWxpZGFkIGRlIG9ic2VydmFyIHVuYSBkaXNjcmVwYW5jaWEgaWd1YWwgbyBtYXlvciBiYWpvIGxhIGhpcMOzdGVzaXMgbnVsYS4ifSx7InF1ZXN0aW9uIjoiU2kgYWwgY29tcHJvYmFyIGxvcyBzdXB1ZXN0b3MgZGUgdW4gQU5PVkEgZGUgdW4gZmFjdG9yIGNvbiAkayA9IDUkIGdydXBvcyBzZSBkZXRlY3RhIHVuYSBkZXN2aWFjacOzbiBzaWduaWZpY2F0aXZhIGRlIGxhIG5vcm1hbGlkYWQgZW4gdW5vIGRlIGxvcyBncnVwb3MgbWVkaWFudGUgU2hhcGlyby1XaWxrLCBwZXJvIGNhZGEgZ3J1cG8gY3VlbnRhIGNvbiB1biB0YW1hw7FvIG11ZXN0cmFsIGRlICRuX2kgPSAzMCQgb2JzZXJ2YWNpb25lcywgwr9wb3IgcXXDqSBlcyBtZXRvZG9sw7NnaWNhbWVudGUgcmF6b25hYmxlIG1hbnRlbmVyIGVsIGFuw6FsaXNpcyBwYXJhbcOpdHJpY28/Iiwib3B0aW9ucyI6WyJQb3JxdWUgYWwgZXN0YXIgZWwgZGlzZcOxbyBiYWxhbmNlYWRvLCBsYXMgZGVzdmlhY2lvbmVzIGRlIGxhIG5vcm1hbGlkYWQgc2UgY29tcGVuc2FuIHJlc3RhbmRvIGxhIHZhcmlhbnphIGRlbnRybyBkZSBsb3MgZ3J1cG9zLiIsIlBvcnF1ZSBsYSBoaXDDs3Rlc2lzIG51bGEgZGUgbGEgcHJ1ZWJhIGRlIFNoYXBpcm8tV2lsayBlc3RhYmxlY2UgbGEgYXVzZW5jaWEgZGUgaG9tb2NlZGFzdGljaWRhZCB5IG5vIGRlIG5vcm1hbGlkYWQuIiwiUG9ycXVlIGVsIHRlc3QgZGUgU2hhcGlyby1XaWxrIHF1ZWRhIGF1dG9tw6F0aWNhbWVudGUgaW52YWxpZGFkbyBjdWFuZG8gZWwgdGFtYcOxbyBtdWVzdHJhbCB0b3RhbCBzdXBlcmEgJE4gPSAxMDAkLiIsIlBvciBlbCBUZW9yZW1hIENlbnRyYWwgZGVsIEzDrW1pdGUsIHF1ZSBnYXJhbnRpemEgcXVlIGxhIGRpc3RyaWJ1Y2nDs24gZGUgbGEgbWVkaWEgbXVlc3RyYWwgZXMgYXByb3hpbWFkYW1lbnRlIG5vcm1hbCBwYXJhIHRhbWHDsW9zIG11ZXN0cmFsZXMgc3VmaWNpZW50ZW1lbnRlIGdyYW5kZXMuIl0sImNvcnJlY3RJbmRleCI6MywicmF0aW9uYWxlIjoiQ29uICRuX2kgXFxnZSAzMCQsIGxhcyBtZWRpYXMgbXVlc3RyYWxlcyBzZSBjb21wb3J0YW4gZGUgZm9ybWEgcm9idXN0YSByZXNwZWN0byBhIGxhIGRpc3RyaWJ1Y2nDs24gbm9ybWFsIG5lY2VzYXJpYSBwYXJhIGVsIEFOT1ZBLiIsImhpbnQiOiJQaWVuc2EgZW4gZWwgdGVvcmVtYSBwcm9iYWJpbMOtc3RpY28gcXVlIGRlc2NyaWJlIGVsIGNvbXBvcnRhbWllbnRvIGRlIGxhIGRpc3RyaWJ1Y2nDs24gZGUgbGFzIG1lZGlhcyBtdWVzdHJhbGVzIGN1YW5kbyBlbCB0YW1hw7FvIG11ZXN0cmFsIGF1bWVudGEuIn0seyJxdWVzdGlvbiI6IlNpIGVuIHVuIGVzdHVkaW8gc2UgdmVyaWZpY2EgZWwgc3VwdWVzdG8gZGUgbm9ybWFsaWRhZCBlbiB0b2RvcyBsb3MgZ3J1cG9zLCBwZXJvIGVsIHRlc3QgZGUgTGV2ZW5lIHByZXNlbnRhIHVuICRwJC12YWxvciBpbmZlcmlvciBhbCBuaXZlbCBkZSBzaWduaWZpY2FjacOzbiAkXFxhbHBoYSA9IDAuMDUkLCDCv2N1w6FsIGVzIGxhIGFsdGVybmF0aXZhIHBhcmFtw6l0cmljYSBpbmRpY2FkYSBwYXJhIGVmZWN0dWFyIGVsIGNvbnRyYXN0ZSBnbG9iYWw/Iiwib3B0aW9ucyI6WyJFbCB0ZXN0IG5vIHBhcmFtw6l0cmljbyBkZSBLcnVza2FsLVdhbGxpcy4iLCJFbCBBTk9WQSBkZSBXZWxjaC4iLCJFbCBtb2RlbG8gbGluZWFsIHNpbXBsZSBleGNsdXllbmRvIGVsIHTDqXJtaW5vIGRlIGludGVyY2VwdG8gJFxcYmV0YV8wJC4iLCJFbCB0ZXN0IGRlIGNvbXBhcmFjaW9uZXMgbcO6bHRpcGxlcyBkZSBUdWtleS4iXSwiY29ycmVjdEluZGV4IjoxLCJyYXRpb25hbGUiOiJFbCBBTk9WQSBkZSBXZWxjaCBhanVzdGEgbG9zIGdyYWRvcyBkZSBsaWJlcnRhZCBkZWwgZXN0YWTDrXN0aWNvICRGJCBwZXJtaXRpZW5kbyByZWFsaXphciBsYSBjb21wYXJhY2nDs24gc2luIGFzdW1pciB2YXJpYW56YXMgaWd1YWxlcy4iLCJoaW50IjoiQnVzY2EgbGEgbW9kaWZpY2FjacOzbiBkZWwgdGVzdCAkRiQgZGlzZcOxYWRhIGVzcGVjw61maWNhbWVudGUgcGFyYSBzaXR1YWNpb25lcyBkb25kZSBubyBzZSBzb3N0aWVuZSBsYSBjb25kaWNpw7NuIGRlIHZhcmlhbnphcyBpZ3VhbGVzLiJ9LHsicXVlc3Rpb24iOiJUcmFzIHJlY2hhemFyIGxhIGhpcMOzdGVzaXMgbnVsYSBlbiB1biBBTk9WQSBjbMOhc2ljbyBkZSB1bmEgdsOtYSwgwr9xdcOpIHByb2NlZGltaWVudG8gZGUgY29tcGFyYWNpb25lcyBtw7psdGlwbGVzIHBlcm1pdGUgY29tcGFyYXIgdG9kYXMgbGFzIHBhcmVqYXMgZGUgbWVkaWFzIGNvbnRyb2xhbmRvIGxhIHRhc2EgZGUgZXJyb3IgZmFtaWxpYXIgZGVsIGNvbmp1bnRvIGRlIHBydWViYXM/Iiwib3B0aW9ucyI6WyJMYSBwcnVlYmEgZGUgbm9ybWFsaWRhZCBkZSBTaGFwaXJvLVdpbGsgcG9yIHBhcmVzLiIsIkxhIHBydWViYSBkZSBsYSAkdCQgZGUgU3R1ZGVudCBlc3TDoW5kYXIgcGFyYSBtdWVzdHJhcyBpbmRlcGVuZGllbnRlcy4iLCJFbCB0ZXN0IGRlIFR1a2V5LiIsIkVsIHRlc3QgZGUgaG9tb2dlbmVpZGFkIGRlIHZhcmlhbnphcyBkZSBMZXZlbmUuIl0sImNvcnJlY3RJbmRleCI6MiwicmF0aW9uYWxlIjoiRWwgbcOpdG9kbyBkZSBUdWtleSBhanVzdGEgbGFzIGRpZmVyZW5jaWFzIHBvciBwYXJlamFzIHBhcmEgY29udHJvbGFyIGxhIHByb2JhYmlsaWRhZCBkZSBjb21ldGVyIGVycm9yZXMgZGUgVGlwbyBJIGVuIGVsIGNvbmp1bnRvIGRlIGNvbXBhcmFjaW9uZXMuIiwiaGludCI6IkNvbnNpZGVyYSBlbCBwcm9jZWRpbWllbnRvIGVzcGVjw61maWNvIGRpc2XDsWFkbyBwYXJhIG1hbnRlbmVyIGVsIGNvbnRyb2wgZGVsIGVycm9yIFRpcG8gSSBlbiBtb2RlbG9zIEFOT1ZBIGN1YW5kbyBzZSBjdW1wbGVuIG5vcm1hbGlkYWQgeSBob21vY2VkYXN0aWNpZGFkLiJ9LHsicXVlc3Rpb24iOiJFbiB1biByZXBvcnRlIGRlIGNvbXBhcmFjaW9uZXMgbcO6bHRpcGxlcyBmb3JtYXRlYWRvIG1lZGlhbnRlIGdydXBvcyBob21vZ8OpbmVvcyBjb24gbGV0cmFzIChwb3IgZWplbXBsbywgZ3J1cG8gJGEkIHkgZ3J1cG8gJGIkKSwgwr9xdcOpIGluZGljYSBlbCBoZWNobyBkZSBxdWUgZG9zIHRyYXRhbWllbnRvcyBjb21wYXJ0YW4gbGEgbGV0cmEgJGEkPyIsIm9wdGlvbnMiOlsiUXVlIGxhIHZhcmlhbnphIGludGVybmEgZGUgYW1ib3MgdHJhdGFtaWVudG9zIGVzIGlndWFsIGEgbGEgdmFyaWFiaWxpZGFkIHRvdGFsIG9ic2VydmFkYSBlbiBsb3MgcmVzaWR1b3MuIiwiUXVlIGFtYm9zIHRyYXRhbWllbnRvcyBwcmVzZW50YW4gZXZpZGVuY2lhcyBzaWduaWZpY2F0aXZhcyBkZSBzZXIgZGlzdGludG9zIGRlIHRvZG9zIGxvcyBkZW3DoXMgbml2ZWxlcyBldmFsdWFkb3MuIiwiUXVlIGxhcyBtZWRpYXMgcG9ibGFjaW9uYWxlcyBkZSBhbWJvcyB0cmF0YW1pZW50b3Mgc29uIG51bcOpcmljYW1lbnRlIGlndWFsZXMgYSBjZXJvLiIsIlF1ZSBubyBleGlzdGVuIGRpZmVyZW5jaWFzIGVzdGFkw61zdGljYW1lbnRlIHNpZ25pZmljYXRpdmFzIGVudHJlIGxhIG1lZGlhIGRlIHJlc3B1ZXN0YSBkZSBhbWJvcyB0cmF0YW1pZW50b3MgYWwgbml2ZWwgZGUgc2lnbmlmaWNhY2nDs24gZmlqYWRvLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkxhIHBlcnRlbmVuY2lhIGFsIG1pc21vIGdydXBvIGhvbW9nw6luZW8gc2XDsWFsYSBxdWUgZWwgY29udHJhc3RlIGVudHJlIGVzb3MgZG9zIHRyYXRhbWllbnRvcyBwYXJ0aWN1bGFyZXMgbm8gcmVzdWx0YSBzaWduaWZpY2F0aXZvLiIsImhpbnQiOiJSZWN1ZXJkYSBsYSBjb25kaWNpw7NuIG5lY2VzYXJpYSBwYXJhIGNvbnNpZGVyYXIgcXVlIGRvcyBuaXZlbGVzIGRlbCBmYWN0b3IgcGVydGVuZWNlbiBhbCBtaXNtbyBncnVwbyBob21vZ8OpbmVvLiJ9LHsicXVlc3Rpb24iOiJTaSBlbCBzdXB1ZXN0byBkZSBub3JtYWxpZGFkIG5vIHNlIHNvc3RpZW5lIGVuIHVuIGVzdHVkaW8gY29uIG11ZXN0cmFzIHBlcXVlw7FhcyAoJG5faSA8IDMwJCksIMK/Y3XDoWwgZXMgZWwgcHJvY2VkaW1pZW50byBnbG9iYWwgbm8gcGFyYW3DqXRyaWNvIGFkZWN1YWRvIHkgcXXDqSBmdW5jacOzbiBkZSBSIHNlIHV0aWxpemEgcGFyYSBlc3R1ZGlhciBwb3N0ZXJpb3JtZW50ZSBsYXMgZGlmZXJlbmNpYXMgcG9yIHBhcmVqYXM/Iiwib3B0aW9ucyI6WyJFbCB0ZXN0IGRlIExldmVuZSBjb21vIHRlc3QgZ2xvYmFsIHkgbGEgZnVuY2nDs24gYHN1bW1hcnkubG1gIHBhcmEgbGFzIGNvbXBhcmFjaW9uZXMgZG9zIGEgZG9zLiIsIkVsIGNvbnRyYXN0ZSBkZSBLcnVza2FsLVdhbGxpcyBjb21vIHRlc3QgZ2xvYmFsIHkgbGEgZnVuY2nDs24gYHBhaXJ3aXNlLndpbGNveC50ZXN0YCBwYXJhIGxhcyBjb21wYXJhY2lvbmVzIGRvcyBhIGRvcy4iLCJFbCBBTk9WQSBkZSBXZWxjaCBjb21vIHRlc3QgZ2xvYmFsIHkgbGEgZnVuY2nDs24gYHBhaXJ3aXNlLnQudGVzdGAgY29uIGBwb29sLnNkPUZBTFNFYCBwYXJhIGxhcyBjb21wYXJhY2lvbmVzIGRvcyBhIGRvcy4iLCJFbCB0ZXN0IGRlIFR1a2V5IGNvbW8gdGVzdCBnbG9iYWwgeSBsYSBmdW5jacOzbiBgc2hhcGlyby50ZXN0YCBwYXJhIGxhcyBjb21wYXJhY2lvbmVzIGRvcyBhIGRvcy4iXSwiY29ycmVjdEluZGV4IjoxLCJyYXRpb25hbGUiOiJLcnVza2FsLVdhbGxpcyBlcyBsYSBhbHRlcm5hdGl2YSBubyBwYXJhbcOpdHJpY2EgYWwgQU5PVkEgeSBsYXMgY29tcGFyYWNpb25lcyBkZSBXaWxjb3hvbiBhbmFsaXphbiBwb3N0ZXJpb3JtZW50ZSBsb3MgcmFuZ29zIHBvciBwYXJlamFzLiIsImhpbnQiOiJCdXNjYSBsYSBwcnVlYmEgbm8gcGFyYW3DqXRyaWNhIGVxdWl2YWxlbnRlIGFsIEFOT1ZBIGRlIHVuIGZhY3RvciB5IHN1IGNvcnJlc3BvbmRpZW50ZSBwcnVlYmEgZGUgcmFuZ29zL1dpbGNveG9uIHBvciBwYXJlamFzLiJ9LHsicXVlc3Rpb24iOiJFbiB1biBtb2RlbG8gbGluZWFsIGVxdWl2YWxlbnRlIGFsIEFOT1ZBIHBhcmEgY29tcGFyYXIgNSByZXBlbGVudGVzIGRvbmRlICdPZG9tb3MnIGVzIGVsIGdydXBvIGRlIHJlZmVyZW5jaWEsIGVsIGNvZWZpY2llbnRlIGVzdGltYWRvIHBhcmEgZWwgcmVwZWxlbnRlICdDK08nIGVzICRcXGhhdHtcXGJldGF9X3tcXHRleHR7QytPfX0gPSAtMi41MzM3JCAoJHAgPSAwLjAwMjY2JCkuIMK/UXXDqSBjb25jbHV5ZSBlc3RhIGVzdGltYWNpw7NuIHJlc3BlY3RvIGFsIHRyYXRhbWllbnRvIGRlIHJlZmVyZW5jaWE/Iiwib3B0aW9ucyI6WyJMYSB0YXNhIG1lZGlhIGVzdGltYWRhIGRlIHBpY2FkdXJhcyBwYXJhIGVsIHJlcGVsZW50ZSBDK08gZXMgc2lnbmlmaWNhdGl2YW1lbnRlIG1lbm9yIHF1ZSBsYSBkZSBPZG9tb3MgZW4gYXByb3hpbWFkYW1lbnRlIDIuNTMgdW5pZGFkZXMuIiwiTGEgbWVkaWEgZ2xvYmFsIGRlIHBpY2FkdXJhcyBkZSB0b2RhcyBsYXMgb2JzZXJ2YWNpb25lcyBkaXNtaW51eWUgJDIuNTMkIHVuaWRhZGVzIGFsIGluY29ycG9yYXIgbGEgdmFyaWFibGUgZXhwbGljYXRpdmEgQytPLiIsIk5vIGV4aXN0ZW4gZGlmZXJlbmNpYXMgc2lnbmlmaWNhdGl2YXMgZW50cmUgQytPIHkgT2RvbW9zIHBvcnF1ZSBsb3MgY29lZmljaWVudGVzIG5lZ2F0aXZvcyBubyBtb2RpZmljYW4gZWwgYWp1c3RlIGdsb2JhbC4iLCJFbCB0cmF0YW1pZW50byBDK08gZXMgdW4gJDIuNTNcXCUkIG1lbm9zIGVmZWN0aXZvIHF1ZSBlbCB0cmF0YW1pZW50byBPZG9tb3MgZW4gbGEgbXVlc3RyYSBhbmFsaXphZGEuIl0sImNvcnJlY3RJbmRleCI6MCwicmF0aW9uYWxlIjoiRWwgY29lZmljaWVudGUgbmVnYXRpdm8gbWlkZSBlbCBkZWNyZW1lbnRvIGRpcmVjdG8gZGUgbGEgbWVkaWEgZGVsIG5pdmVsIGNvbnNpZGVyYWRvIGNvbiByZXNwZWN0byBhIGxhIG1lZGlhIGRlbCBuaXZlbCB0b21hZG8gY29tbyByZWZlcmVuY2lhLiIsImhpbnQiOiJFdmFsw7phIGPDs21vIHNlIGNhbGN1bGEgbGEgbWVkaWEgZXNwZXJhZGEgZGVsIGdydXBvIGVuIHByZXNlbmNpYSBkZSB1bmEgdmFyaWFibGUgaW5kaWNhZG9yYSBjdXlvIGNvZWZpY2llbnRlIGVzIG5lZ2F0aXZvLiJ9XQ==')).getDataAsString('UTF-8'));
const QUIZ_TITLE = 'Cuestionario de práctica: ANOVA';
const QUIZ_DESCRIPTION = 'Comprueba lo que sabes sobre el análisis de la varianza de una vía, los contrastes y su interpretación.';
const RESPONSE_BOOK_KEY = 'EIB_ANOVA_RESPONSE_SHEET_ID';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle(QUIZ_TITLE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupANOVAQuiz_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(RESPONSE_BOOK_KEY);
  if (savedId) {
    const saved = SpreadsheetApp.openById(savedId);
    Logger.log('Hoja de respuestas: ' + saved.getUrl());
    return saved.getUrl();
  }

  const spreadsheet = SpreadsheetApp.create('Resultados — EIB — ANOVA');
  const bank = spreadsheet.getSheets()[0];
  bank.setName('Preguntas');
  const bankHeaders = ['Pregunta', 'Opción A', 'Opción B', 'Opción C', 'Opción D', 'Respuesta correcta', 'Explicación', 'Pista'];
  bank.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
  const bankRows = ANOVA_QUESTIONS.map(question => [
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
  ANOVA_QUESTIONS.forEach((question, index) => {
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
  summary.getRange(6, 3, ANOVA_QUESTIONS.length, 1).setNumberFormat('0%');
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
  const correctCount = answers.reduce((total, answer, index) =>
    total + (answer === questions[index].correctIndex ? 1 : 0), 0);
  const sheetId = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!sheetId) throw new Error('El cuestionario aún no está configurado. Avisa al profesor.');

  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const responseSheet = spreadsheet.getSheetByName('Respuestas');
  const storedQuestionCount = Math.floor((responseSheet.getLastColumn() - 4) / 2);
  const row = [new Date(), safeSheetText_(name), correctCount, correctCount];
  for (let index = 0; index < storedQuestionCount; index++) row.push('', '');
  answers.forEach((answer, index) => {
    const column = 4 + questions[index].storageIndex * 2;
    row[column] = String.fromCharCode(65 + answer);
    row[column + 1] = answer === questions[index].correctIndex;
  });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    responseSheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  return {
    score: correctCount,
    total: ANOVA_QUESTIONS.length,
    results: answers.map((answer, index) => {
      const question = questions[index];
      return {
        number: index + 1,
        question: mathText_(question.question),
        selectedIndex: answer,
        correctIndex: question.correctIndex,
        selectedText: mathText_(question.options[answer]),
        correctText: mathText_(question.options[question.correctIndex]),
        correct: answer === question.correctIndex,
        rationale: mathText_(question.rationale || ''),
        hint: mathText_(question.hint || '')
      };
    })
  };
}

function loadQuestions_() {
  const sheetId = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!sheetId) throw new Error('El cuestionario aún no está configurado. Avisa al profesor.');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName('Preguntas');
  if (!sheet) throw new Error('No se encuentra la pestaña Preguntas. Avisa al profesor.');
  const rows = sheet.getDataRange().getValues().slice(1).filter(row => String(row[0] || '').trim());
  const responseSheet = spreadsheet.getSheetByName('Respuestas');
  if (!responseSheet) throw new Error('No se encuentra la pestaña Respuestas. Avisa al profesor.');
  const storedQuestionCount = Math.floor((responseSheet.getLastColumn() - 4) / 2);
  const skippedQuestion = storedQuestionCount === ANOVA_QUESTIONS.length + 1;
  const activeRows = rows.length === ANOVA_QUESTIONS.length + 1
    ? rows.filter((_, index) => index !== 3)
    : rows;
  if (activeRows.length !== ANOVA_QUESTIONS.length) {
    throw new Error('La hoja Preguntas debe contener las 11 preguntas activas del piloto.');
  }
  const questions = activeRows.map((row, index) => {
    const correctLetter = String(row[5] || '').trim().toUpperCase();
    const correctIndex = correctLetter.charCodeAt(0) - 65;
    const options = row.slice(1, 5).map(value => String(value || '').trim());
    if (options.some(option => !option) || correctIndex < 0 || correctIndex > 3) {
      throw new Error('Revisa las opciones y la respuesta correcta de la pregunta ' + (index + 1) + ' en la hoja Preguntas.');
    }
    return {
      question: String(row[0]),
      options,
      correctIndex,
      storageIndex: skippedQuestion && index >= 3 ? index + 1 : index,
      rationale: String(row[6] || ''),
      hint: String(row[7] || '')
    };
  });
  return questions;
}

function plainText_(value) {
  const normalized = String(value || '').replace(/\text\{/g, '\\text{');
  return normalized.replace(/\$([^$]+)\$/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\((.*?)\\\)/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, expression) => latexToPlainText_(expression));
}

// Preserve LaTeX delimiters for MathJax in the quiz while repairing tab
// characters that may have replaced the leading backslash in \text commands.
function mathText_(value) {
  return String(value || '').replace(/\text\{/g, '\\text{');
}

function latexToPlainText_(expression) {
  const source = String(expression).replace(/\\\\(?=[A-Za-z]+)/g, '\\');
  const greek = { alpha:'α', beta:'β', epsilon:'ε', varepsilon:'ε', mu:'μ', rho:'ρ', sigma:'σ', tau:'τ', Gamma:'Γ', Delta:'Δ' };
  const symbols = { approx:'≈', cdot:'·', ge:'≥', geq:'≥', le:'≤', leq:'≤', neq:'≠', ne:'≠', pm:'±', times:'×', infty:'∞', dots:'…', ldots:'…', cdots:'…' };
  let position = 0;
  function group_() {
    while (/\s/.test(source[position] || '')) position++;
    if (source[position] !== '{') return '';
    position++;
    return parse_('}');
  }
  function parse_(closing) {
    let output = '';
    while (position < source.length) {
      const character = source[position++];
      if (character === closing) break;
      if (character === '{') output += parse_('}');
      else if (character === '\\') {
        if (/[A-Za-z]/.test(source[position] || '')) {
          let command = '';
          while (/[A-Za-z]/.test(source[position] || '')) command += source[position++];
          if (Object.prototype.hasOwnProperty.call(greek, command)) output += greek[command];
          else if (Object.prototype.hasOwnProperty.call(symbols, command)) output += symbols[command];
          else if (command === 'frac') output += '(' + group_() + ')/(' + group_() + ')';
          else if (command === 'sqrt') output += '√(' + group_() + ')';
          else if (['text','mathrm','mathit','mathbf','mathcal','operatorname'].includes(command)) output += group_();
          else if (['hat','bar','overline'].includes(command)) output += command + '(' + group_() + ')';
          else if (command !== 'left' && command !== 'right') output += command;
        } else {
          const escaped = source[position++];
          output += /[,;:!]/.test(escaped) ? ' ' : escaped;
        }
      } else if (character === '_' || character === '^') {
        if (source[position] === '{') output += character + '(' + group_() + ')';
        else if (source[position]) output += character + source[position++];
        else output += character;
      } else output += character;
    }
    return output;
  }
  return parse_('').replace(/\s+/g, ' ').trim();
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
