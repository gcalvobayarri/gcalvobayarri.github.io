const ANOVA_QUESTIONS = JSON.parse(Utilities.newBlob(Utilities.base64Decode('W3sicXVlc3Rpb24iOiLCv1BvciBxdcOpIG5vIHJlc3VsdGEgYWRlY3VhZG8gcmVhbGl6YXIgbcO6bHRpcGxlcyBjb250cmFzdGVzIGRlIGhpcMOzdGVzaXMgaW5kZXBlbmRpZW50ZXMgcG9yIHBhcmVqYXMgKGNvbW8gcHJ1ZWJhcyAkdCQgZGUgU3R1ZGVudCkgcGFyYSBjb21wYXJhciBsYXMgbWVkaWFzIGRlIHRyZXMgbyBtw6FzIGdydXBvcyBlbiBsdWdhciBkZSBhcGxpY2FyIHVuIEFOT1ZBPyIsIm9wdGlvbnMiOlsiUG9ycXVlIHJlZHVjZSBsYSBwb3RlbmNpYSBlc3RhZMOtc3RpY2EgZGVsIGVzdHVkaW8gYWwgbm8gY29uc2lkZXJhciBlbCB0YW1hw7FvIG11ZXN0cmFsIHRvdGFsICROJCBlbiBlbCBjw6FsY3VsbyBkZSBjYWRhIG1lZGlhLiIsIlBvcnF1ZSBpbnZhbGlkYSBlbCBzdXB1ZXN0byBkZSBob21vY2VkYXN0aWNpZGFkIGFsIGNhbGN1bGFyIHZhcmlhbnphcyBtdWVzdHJhbGVzIHNlcGFyYWRhcyBwYXJhIGNhZGEgcGFyZWphIGRlIGdydXBvcy4iLCJQb3JxdWUgZXhpZ2UgZXN0cmljdGFtZW50ZSBxdWUgdG9kb3MgbG9zIGdydXBvcyBhbmFsaXphZG9zIHRlbmdhbiBleGFjdGFtZW50ZSBlbCBtaXNtbyBuw7ptZXJvIGRlIG9ic2VydmFjaW9uZXMgKCRuXzEgPSBuXzIgPSBcXGRvdHMgPSBuX2skKS4iLCJQb3JxdWUgaW5jcmVtZW50YSBzdXN0YW5jaWFsbWVudGUgbGEgcHJvYmFiaWxpZGFkIGdsb2JhbCBkZSBjb21ldGVyIGFsIG1lbm9zIHVuIGVycm9yIGRlIFRpcG8gSSBhbCBkZXRlY3RhciBkaWZlcmVuY2lhcyBmYWxzYW1lbnRlIHNpZ25pZmljYXRpdmFzIHBvciBhemFyLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IlJlYWxpemFyIG3Dumx0aXBsZXMgY29udHJhc3RlcyBhY3VtdWxhIGVsIG5pdmVsIGRlIHNpZ25pZmljYWNpw7NuIGluZGl2aWR1YWwsIGxvIHF1ZSBlbGV2YSBlbCByaWVzZ28gZ2xvYmFsIGRlIGNvbWV0ZXIgYWwgbWVub3MgdW4gZXJyb3IgZGUgVGlwbyBJIGVuIGVsIGNvbmp1bnRvIGRlbCBleHBlcmltZW50by4iLCJoaW50IjoiUGllbnNhIGVuIGxvIHF1ZSBsZSBvY3VycmUgYSBsYSB0YXNhIGdsb2JhbCBkZSBlcnJvciBjdWFuZG8gc2UgcmVhbGl6YW4gdmFyaW9zIGNvbnRyYXN0ZXMgZXN0YWTDrXN0aWNvcyBzaW11bHTDoW5lb3MuIn0seyJxdWVzdGlvbiI6IkVuIGVsIGNvbnRleHRvIGRlbCBkaXNlw7FvIGRlIGV4cGVyaW1lbnRvcyBwYXJhIHVuIEFOT1ZBIGRlIHVuYSB2w61hLCDCv2N1w6FsIGVzIGxhIGRpZmVyZW5jaWEgZnVuZGFtZW50YWwgZW50cmUgdW5hIHLDqXBsaWNhIHkgdW5hIG1lZGljacOzbiByZXBldGlkYT8iLCJvcHRpb25zIjpbIlVuYSByw6lwbGljYSBzaXJ2ZSBwYXJhIGNhbGN1bGFyIGxhIHZhcmlhYmlsaWRhZCBlbnRyZSBncnVwb3MsIG1pZW50cmFzIHF1ZSBsYSBtZWRpY2nDs24gcmVwZXRpZGEgY3VhbnRpZmljYSDDum5pY2FtZW50ZSBsYSB2YXJpYWJpbGlkYWQgaW50cmEtZ3J1cG9zLiIsIlVuYSByw6lwbGljYSBhcGxpY2EgZWwgdHJhdGFtaWVudG8gYSBkaXN0aW50YXMgdW5pZGFkZXMgZXhwZXJpbWVudGFsZXMgaW5kZXBlbmRpZW50ZXMsIG1pZW50cmFzIHF1ZSB1bmEgbWVkaWNpw7NuIHJlcGV0aWRhIHRvbWEgbcO6bHRpcGxlcyBkYXRvcyBkZSBsYSBtaXNtYSB1bmlkYWQgZXhwZXJpbWVudGFsLiIsIlVuYSByw6lwbGljYSByZXF1aWVyZSBxdWUgZWwgZmFjdG9yIHRlbmdhIGFsIG1lbm9zIHRyZXMgbml2ZWxlcywgbWllbnRyYXMgcXVlIHVuYSBtZWRpY2nDs24gcmVwZXRpZGEgc2UgYXBsaWNhIHNvbG8gZW4gZGlzZcOxb3MgZGUgZG9zIG5pdmVsZXMuIiwiTGEgcsOpcGxpY2EgaW5jcmVtZW50YSBsb3MgZ3JhZG9zIGRlIGxpYmVydGFkIGRlbCBkZW5vbWluYWRvciwgbWllbnRyYXMgcXVlIGxhIG1lZGljacOzbiByZXBldGlkYSBzb2xvIG1vZGlmaWNhIGxvcyBkZWwgbnVtZXJhZG9yLiJdLCJjb3JyZWN0SW5kZXgiOjEsInJhdGlvbmFsZSI6IkxhIHLDqXBsaWNhIGdhcmFudGl6YSB1bmlkYWRlcyBpbmRlcGVuZGllbnRlcyBwYXJhIGVzdGltYXIgbGEgdmFyaWFiaWxpZGFkIGFsZWF0b3JpYSBwdXJhLCBhIGRpZmVyZW5jaWEgZGUgbWVkaXIgdmFyaWFzIHZlY2VzIGxhIG1pc21hIHVuaWRhZC4iLCJoaW50IjoiQ29uc2lkZXJhIGxhIGluZGVwZW5kZW5jaWEgZGUgbGFzIHVuaWRhZGVzIGV4cGVyaW1lbnRhbGVzIGZyZW50ZSBhIHRvbWFyIG3Dumx0aXBsZXMgb2JzZXJ2YWNpb25lcyBzb2JyZSB1biBtaXNtbyBlbGVtZW50by4ifSx7InF1ZXN0aW9uIjoiRW4gbGEgZGVzY29tcG9zaWNpw7NuIGRlIGxhIHZhcmlhYmlsaWRhZCBkZWwgQU5PVkEgZGUgdW5hIHbDrWEgKCRTQ197XFx0ZXh0e1RvdGFsfX0gPSBTQ197XHRleHR7RW50cmV9fSArIFNDX3tcdGV4dHtJbnRyYX19JCksIMK/cXXDqSBjdWFudGlmaWNhIGNvbmNyZXRhbWVudGUgbGEgU3VtYSBkZSBDdWFkcmFkb3MgRW50cmUgZ3J1cG9zICgkU0Nfe1x0ZXh0e0VudHJlfX0kKT8iLCJvcHRpb25zIjpbIkxhIGRpZmVyZW5jaWEgYWwgY3VhZHJhZG8gZW50cmUgbGEgbWVkaWEgbXVlc3RyYWwgZGUgY2FkYSBncnVwbyB5IGxhIG1lZGlhIGdsb2JhbCwgcG9uZGVyYWRhIHBvciBlbCB0YW1hw7FvIGRlbCBncnVwbyAkbl9pJC4iLCJMYSB2YXJpYWJpbGlkYWQgZGVsIHTDqXJtaW5vIGRlIGVycm9yIGFsZWF0b3JpbyAkXFx2YXJlcHNpbG9uX3tpan0kIGNvbcO6biBhIHRvZGFzIGxhcyB1bmlkYWRlcyBleHBlcmltZW50YWxlcyBkZWwgbW9kZWxvLiIsIkxhIGRpc3BlcnNpw7NuIGN1YWRyw6F0aWNhIGRlIGNhZGEgb2JzZXJ2YWNpw7NuIGluZGl2aWR1YWwgJFlfe2lqfSQgcmVzcGVjdG8gYSBsYSBtZWRpYSBlc3RpbWFkYSBkZSBzdSBwcm9waW8gZ3J1cG8gJFxcYmFye1l9X3tpXFxjZG90fSQuIiwiTGEgdmFyaWFuemEgbXVlc3RyYWwgdG90YWwgb2JzZXJ2YWRhIGVuIGxhIHZhcmlhYmxlIHJlc3B1ZXN0YSBtdWx0aXBsaWNhZGEgcG9yIGVsIG7Dum1lcm8gdG90YWwgZGUgZ3J1cG9zICRrJC4iXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJFc3RhIG1hZ25pdHVkIG1pZGUgY3XDoW50byBzZSBhbGVqYW4gbGFzIG1lZGlhcyBkZSBsb3MgZ3J1cG9zIHJlc3BlY3RvIGEgbGEgbWVkaWEgZ2VuZXJhbCBkZWwgY29uanVudG8gZGUgb2JzZXJ2YWNpb25lcy4iLCJoaW50IjoiRsOtamF0ZSBlbiBsYXMgZGVzdmlhY2lvbmVzIHF1ZSB1dGlsaXphIGVzdGEgc3VtYSBkZSBjdWFkcmFkb3M6IGRpc3RhbmNpYXMgZW50cmUgbGFzIG1lZGlhcyBkZWwgZ3J1cG8geSB1bmEgbWVkaWEgY2VudHJhbCBkZSB0b2RvIGVsIGNvbmp1bnRvIGRlIGRhdG9zLiJ9LHsicXVlc3Rpb24iOiJFbiB1biBleHBlcmltZW50byBtb2RlbGFkbyBjb24gQU5PVkEgZGUgdW5hIHbDrWEgY29uICRrID0gNCQgZ3J1cG9zIHkgdW4gdG90YWwgZGUgJE4gPSA2MCQgb2JzZXJ2YWNpb25lcywgc2Ugb2J0aWVuZSAkU0Nfe1xcdGV4dHtFbnRyZX19ID0gMTIwJCB5ICRTQ197XHRleHR7SW50cmF9fSA9IDI4MCQuIMK/Q3XDoWwgZXMgZWwgdmFsb3IgZGVsIGVzdGFkw61zdGljbyBkZSBjb250cmFzdGUgJEYkPyIsIm9wdGlvbnMiOlsiJEYgPSA4LjAwJCIsIiRGID0gMC40MyQiLCIkRiA9IDIuNjckIiwiJEYgPSAxNS4wMCQiXSwiY29ycmVjdEluZGV4IjowLCJyYXRpb25hbGUiOiJMb3MgZ3JhZG9zIGRlIGxpYmVydGFkIHNvbiAkay0xPTMkIHkgJE4taz01NiQuIExvcyBjdWFkcmFkb3MgbWVkaW9zIHJlc3VsdGFuICRDTV97XFx0ZXh0e0VudHJlfX0gPSAxMjAvMyA9IDQwJCB5ICRDTV97XFx0ZXh0e0ludHJhfX0gPSAyODAvNTYgPSA1JC4gUG9yIHRhbnRvLCAkRiA9IDQwLzUgPSA4LjAwJC4iLCJoaW50IjoiUmVjdWVyZGEgY2FsY3VsYXIgcHJpbWVybyBsb3MgZ3JhZG9zIGRlIGxpYmVydGFkIGRlIGNhZGEgc3VtYSBkZSBjdWFkcmFkb3MgcGFyYSBvYnRlbmVyIGxvcyBjdWFkcmFkb3MgbWVkaW9zICgkQ01fe1xcdGV4dHtFbnRyZX19JCB5ICRDTV97XFx0ZXh0e0ludHJhfX0kKS4ifSx7InF1ZXN0aW9uIjoiQWwgZm9ybXVsYXIgdW4gQU5PVkEgZGUgdW4gZmFjdG9yIGNvbiAkayQgbml2ZWxlcyBjb21vIHVuIG1vZGVsbyBsaW5lYWwgJFlfaSA9IFxcYmV0YV8wICsgXFxiZXRhXzEgWF97MWl9ICsgXFxkb3RzICsgXFxiZXRhX3trLTF9IFhfeyhrLTEpaX0gKyBcXHZhcmVwc2lsb25faSQgdXNhbmRvIHZhcmlhYmxlcyBpbmRpY2Fkb3JhcyAoZHVtbXkpLCDCv2PDs21vIHNlIGludGVycHJldGEgZWwgY29lZmljaWVudGUgJFxcYmV0YV9qJD8iLCJvcHRpb25zIjpbIlJlcHJlc2VudGEgbGEgbWVkaWEgcG9ibGFjaW9uYWwgZGlyZWN0YSB5IGFic29sdXRhIGRlIGxhcyBvYnNlcnZhY2lvbmVzIHBlcnRlbmVjaWVudGVzIGFsIGdydXBvICRqKzEkLiIsIlJlcHJlc2VudGEgbGEgZGlmZXJlbmNpYSBlbnRyZSBsYSBtZWRpYSBwb2JsYWNpb25hbCBkZWwgZ3J1cG8gJGorMSQgeSBsYSBtZWRpYSBwb2JsYWNpb25hbCBkZWwgZ3J1cG8gZGUgcmVmZXJlbmNpYS4iLCJSZXByZXNlbnRhIGxhIGRlc3ZpYWNpw7NuIGVzdMOhbmRhciBpbnRyYS1ncnVwbyBhc29jaWFkYSBhIGxhcyB1bmlkYWRlcyBkZWwgbml2ZWwgJGorMSQuIiwiUmVwcmVzZW50YSBlbCBjb2NpZW50ZSBlbnRyZSBsYSBtZWRpYSBtdWVzdHJhbCBkZWwgZ3J1cG8gJGorMSQgeSBsYSBtZWRpYSBnbG9iYWwgZGUgdG9kYXMgbGFzIG9ic2VydmFjaW9uZXMuIl0sImNvcnJlY3RJbmRleCI6MSwicmF0aW9uYWxlIjoiRW4gbGEgY29kaWZpY2FjacOzbiBjb24gdmFyaWFibGVzIGluZGljYWRvcmFzLCBsYSBjb25zdGFudGUgZXMgbGEgbWVkaWEgZGVsIGdydXBvIGRlIHJlZmVyZW5jaWEgeSBjYWRhIGNvZWZpY2llbnRlIG1pZGUgZWwgaW5jcmVtZW50byBvIGRlY3JlbWVudG8gcmVzcGVjdG8gYSBlbGxhLiIsImhpbnQiOiJSZWN1ZXJkYSBxdWUgbGEgY2F0ZWdvcsOtYSBxdWUgbm8gdGllbmUgdmFyaWFibGUgaW5kaWNhZG9yYSBhc29jaWFkYSBhY3TDumEgY29tbyBuaXZlbCBkZSByZWZlcmVuY2lhLiJ9LHsicXVlc3Rpb24iOiJFbiBsYSBpbmZlcmVuY2lhIGRlbCBBTk9WQSwgwr9jdcOhbCBlcyBsYSBpbnRlcnByZXRhY2nDs24gZm9ybWFsIGRlbCAkcCQtdmFsb3IgYXNvY2lhZG8gYWwgZXN0YWTDrXN0aWNvIGRlIGNvbnRyYXN0ZSAkRl97XFx0ZXh0e29ic319JD8iLCJvcHRpb25zIjpbIkVzIGxhIHByb2JhYmlsaWRhZCBkZSBxdWUgbGEgaGlww7N0ZXNpcyBudWxhICRIXzA6IFxcbXVfMSA9IFxcbXVfMiA9IFxcZG90cyA9IFxcbXVfayQgc2VhIGZhbHNhIGRhZG9zIGxvcyBkYXRvcyBvYnNlcnZhZG9zLiIsIkVzIGxhIHByb2JhYmlsaWRhZCBkZSBjb21ldGVyIHVuIGVycm9yIGRlIFRpcG8gSUkgYWwgcmVjaGF6YXIgcXVlIGFsIG1lbm9zIHVuYSBtZWRpYSBlcyBkaWZlcmVudGUgZGUgbGFzIGRlbcOhcy4iLCJFcyBsYSBwcm9iYWJpbGlkYWQgZGUgb2J0ZW5lciB1biBlc3RhZMOtc3RpY28gJEYkIGlndWFsIG8gbWF5b3IgcXVlICRGX3tcXHRleHR7b2JzfX0kLCBhc3VtaWVuZG8gcXVlIGxhIGhpcMOzdGVzaXMgbnVsYSBkZSBpZ3VhbGRhZCBkZSBtZWRpYXMgZXMgY2llcnRhLiIsIkVzIGxhIHByb3BvcmNpw7NuIGRlIHZhcmlhYmlsaWRhZCB0b3RhbCBxdWUgcXVlZGEgZXhwbGljYWRhIHBvciBsYXMgZGlmZXJlbmNpYXMgZXhpc3RlbnRlcyBlbnRyZSBsYXMgbWVkaWFzIGRlIGxvcyBncnVwb3MuIl0sImNvcnJlY3RJbmRleCI6MiwicmF0aW9uYWxlIjoiRWwgJHAkLXZhbG9yIG1pZGUgbGEgY29sYSBkZXJlY2hhIGRlIGxhIGRpc3RyaWJ1Y2nDs24gJEZfe2stMSwgTi1rfSQgYSBwYXJ0aXIgZGVsIHZhbG9yIG9ic2VydmFkbyBiYWpvIGVsIHN1cHVlc3RvIGRlIHF1ZSAkSF8wJCBlcyB2ZXJkYWRlcmEuIiwiaGludCI6IlJlY3VlcmRhIHF1ZSBzZSBldmFsw7phIGxhIHByb2JhYmlsaWRhZCBkZSBvYnNlcnZhciB1bmEgZGlzY3JlcGFuY2lhIGlndWFsIG8gbWF5b3IgYmFqbyBsYSBoaXDDs3Rlc2lzIG51bGEuIn0seyJxdWVzdGlvbiI6IlNpIGFsIGNvbXByb2JhciBsb3Mgc3VwdWVzdG9zIGRlIHVuIEFOT1ZBIGRlIHVuIGZhY3RvciBjb24gJGsgPSA1JCBncnVwb3Mgc2UgZGV0ZWN0YSB1bmEgZGVzdmlhY2nDs24gc2lnbmlmaWNhdGl2YSBkZSBsYSBub3JtYWxpZGFkIGVuIHVubyBkZSBsb3MgZ3J1cG9zIG1lZGlhbnRlIFNoYXBpcm8tV2lsaywgcGVybyBjYWRhIGdydXBvIGN1ZW50YSBjb24gdW4gdGFtYcOxbyBtdWVzdHJhbCBkZSAkbl9pID0gMzAkIG9ic2VydmFjaW9uZXMsIMK/cG9yIHF1w6kgZXMgbWV0b2RvbMOzZ2ljYW1lbnRlIHJhem9uYWJsZSBtYW50ZW5lciBlbCBhbsOhbGlzaXMgcGFyYW3DqXRyaWNvPyIsIm9wdGlvbnMiOlsiUG9ycXVlIGFsIGVzdGFyIGVsIGRpc2XDsW8gYmFsYW5jZWFkbywgbGFzIGRlc3ZpYWNpb25lcyBkZSBsYSBub3JtYWxpZGFkIHNlIGNvbXBlbnNhbiByZXN0YW5kbyBsYSB2YXJpYW56YSBkZW50cm8gZGUgbG9zIGdydXBvcy4iLCJQb3JxdWUgbGEgaGlww7N0ZXNpcyBudWxhIGRlIGxhIHBydWViYSBkZSBTaGFwaXJvLVdpbGsgZXN0YWJsZWNlIGxhIGF1c2VuY2lhIGRlIGhvbW9jZWRhc3RpY2lkYWQgeSBubyBkZSBub3JtYWxpZGFkLiIsIlBvcnF1ZSBlbCB0ZXN0IGRlIFNoYXBpcm8tV2lsayBxdWVkYSBhdXRvbcOhdGljYW1lbnRlIGludmFsaWRhZG8gY3VhbmRvIGVsIHRhbWHDsW8gbXVlc3RyYWwgdG90YWwgc3VwZXJhICROID0gMTAwJC4iLCJQb3IgZWwgVGVvcmVtYSBDZW50cmFsIGRlbCBMw61taXRlLCBxdWUgZ2FyYW50aXphIHF1ZSBsYSBkaXN0cmlidWNpw7NuIGRlIGxhIG1lZGlhIG11ZXN0cmFsIGVzIGFwcm94aW1hZGFtZW50ZSBub3JtYWwgcGFyYSB0YW1hw7FvcyBtdWVzdHJhbGVzIHN1ZmljaWVudGVtZW50ZSBncmFuZGVzLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkNvbiAkbl9pIFxcZ2UgMzAkLCBsYXMgbWVkaWFzIG11ZXN0cmFsZXMgc2UgY29tcG9ydGFuIGRlIGZvcm1hIHJvYnVzdGEgcmVzcGVjdG8gYSBsYSBkaXN0cmlidWNpw7NuIG5vcm1hbCBuZWNlc2FyaWEgcGFyYSBlbCBBTk9WQS4iLCJoaW50IjoiUGllbnNhIGVuIGVsIHRlb3JlbWEgcHJvYmFiaWzDrXN0aWNvIHF1ZSBkZXNjcmliZSBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBkaXN0cmlidWNpw7NuIGRlIGxhcyBtZWRpYXMgbXVlc3RyYWxlcyBjdWFuZG8gZWwgdGFtYcOxbyBtdWVzdHJhbCBhdW1lbnRhLiJ9LHsicXVlc3Rpb24iOiJTaSBlbiB1biBlc3R1ZGlvIHNlIHZlcmlmaWNhIGVsIHN1cHVlc3RvIGRlIG5vcm1hbGlkYWQgZW4gdG9kb3MgbG9zIGdydXBvcywgcGVybyBlbCB0ZXN0IGRlIExldmVuZSBwcmVzZW50YSB1biAkcCQtdmFsb3IgaW5mZXJpb3IgYWwgbml2ZWwgZGUgc2lnbmlmaWNhY2nDs24gJFxcYWxwaGEgPSAwLjA1JCwgwr9jdcOhbCBlcyBsYSBhbHRlcm5hdGl2YSBwYXJhbcOpdHJpY2EgaW5kaWNhZGEgcGFyYSBlZmVjdHVhciBlbCBjb250cmFzdGUgZ2xvYmFsPyIsIm9wdGlvbnMiOlsiRWwgdGVzdCBubyBwYXJhbcOpdHJpY28gZGUgS3J1c2thbC1XYWxsaXMuIiwiRWwgQU5PVkEgZGUgV2VsY2guIiwiRWwgbW9kZWxvIGxpbmVhbCBzaW1wbGUgZXhjbHV5ZW5kbyBlbCB0w6lybWlubyBkZSBpbnRlcmNlcHRvICRcXGJldGFfMCQuIiwiRWwgdGVzdCBkZSBjb21wYXJhY2lvbmVzIG3Dumx0aXBsZXMgZGUgVHVrZXkuIl0sImNvcnJlY3RJbmRleCI6MSwicmF0aW9uYWxlIjoiRWwgQU5PVkEgZGUgV2VsY2ggYWp1c3RhIGxvcyBncmFkb3MgZGUgbGliZXJ0YWQgZGVsIGVzdGFkw61zdGljbyAkRiQgcGVybWl0aWVuZG8gcmVhbGl6YXIgbGEgY29tcGFyYWNpw7NuIHNpbiBhc3VtaXIgdmFyaWFuemFzIGlndWFsZXMuIiwiaGludCI6IkJ1c2NhIGxhIG1vZGlmaWNhY2nDs24gZGVsIHRlc3QgJEYkIGRpc2XDsWFkYSBlc3BlY8OtZmljYW1lbnRlIHBhcmEgc2l0dWFjaW9uZXMgZG9uZGUgbm8gc2Ugc29zdGllbmUgbGEgY29uZGljacOzbiBkZSB2YXJpYW56YXMgaWd1YWxlcy4ifSx7InF1ZXN0aW9uIjoiVHJhcyByZWNoYXphciBsYSBoaXDDs3Rlc2lzIG51bGEgZW4gdW4gQU5PVkEgY2zDoXNpY28gZGUgdW5hIHbDrWEsIMK/cXXDqSBwcm9jZWRpbWllbnRvIGRlIGNvbXBhcmFjaW9uZXMgbcO6bHRpcGxlcyBwZXJtaXRlIGNvbXBhcmFyIHRvZGFzIGxhcyBwYXJlamFzIGRlIG1lZGlhcyBjb250cm9sYW5kbyBsYSB0YXNhIGRlIGVycm9yIGZhbWlsaWFyIGRlbCBjb25qdW50byBkZSBwcnVlYmFzPyIsIm9wdGlvbnMiOlsiTGEgcHJ1ZWJhIGRlIG5vcm1hbGlkYWQgZGUgU2hhcGlyby1XaWxrIHBvciBwYXJlcy4iLCJMYSBwcnVlYmEgZGUgbGEgJHQkIGRlIFN0dWRlbnQgZXN0w6FuZGFyIHBhcmEgbXVlc3RyYXMgaW5kZXBlbmRpZW50ZXMuIiwiRWwgdGVzdCBkZSBUdWtleS4iLCJFbCB0ZXN0IGRlIGhvbW9nZW5laWRhZCBkZSB2YXJpYW56YXMgZGUgTGV2ZW5lLiJdLCJjb3JyZWN0SW5kZXgiOjIsInJhdGlvbmFsZSI6IkVsIG3DqXRvZG8gZGUgVHVrZXkgYWp1c3RhIGxhcyBkaWZlcmVuY2lhcyBwb3IgcGFyZWphcyBwYXJhIGNvbnRyb2xhciBsYSBwcm9iYWJpbGlkYWQgZGUgY29tZXRlciBlcnJvcmVzIGRlIFRpcG8gSSBlbiBlbCBjb25qdW50byBkZSBjb21wYXJhY2lvbmVzLiIsImhpbnQiOiJDb25zaWRlcmEgZWwgcHJvY2VkaW1pZW50byBlc3BlY8OtZmljbyBkaXNlw7FhZG8gcGFyYSBtYW50ZW5lciBlbCBjb250cm9sIGRlbCBlcnJvciBUaXBvIEkgZW4gbW9kZWxvcyBBTk9WQSBjdWFuZG8gc2UgY3VtcGxlbiBub3JtYWxpZGFkIHkgaG9tb2NlZGFzdGljaWRhZC4ifSx7InF1ZXN0aW9uIjoiRW4gdW4gcmVwb3J0ZSBkZSBjb21wYXJhY2lvbmVzIG3Dumx0aXBsZXMgZm9ybWF0ZWFkbyBtZWRpYW50ZSBncnVwb3MgaG9tb2fDqW5lb3MgY29uIGxldHJhcyAocG9yIGVqZW1wbG8sIGdydXBvICRhJCB5IGdydXBvICRiJCksIMK/cXXDqSBpbmRpY2EgZWwgaGVjaG8gZGUgcXVlIGRvcyB0cmF0YW1pZW50b3MgY29tcGFydGFuIGxhIGxldHJhICRhJD8iLCJvcHRpb25zIjpbIlF1ZSBsYSB2YXJpYW56YSBpbnRlcm5hIGRlIGFtYm9zIHRyYXRhbWllbnRvcyBlcyBpZ3VhbCBhIGxhIHZhcmlhYmlsaWRhZCB0b3RhbCBvYnNlcnZhZGEgZW4gbG9zIHJlc2lkdW9zLiIsIlF1ZSBhbWJvcyB0cmF0YW1pZW50b3MgcHJlc2VudGFuIGV2aWRlbmNpYXMgc2lnbmlmaWNhdGl2YXMgZGUgc2VyIGRpc3RpbnRvcyBkZSB0b2RvcyBsb3MgZGVtw6FzIG5pdmVsZXMgZXZhbHVhZG9zLiIsIlF1ZSBsYXMgbWVkaWFzIHBvYmxhY2lvbmFsZXMgZGUgYW1ib3MgdHJhdGFtaWVudG9zIHNvbiBudW3DqXJpY2FtZW50ZSBpZ3VhbGVzIGEgY2Vyby4iLCJRdWUgbm8gZXhpc3RlbiBkaWZlcmVuY2lhcyBlc3RhZMOtc3RpY2FtZW50ZSBzaWduaWZpY2F0aXZhcyBlbnRyZSBsYSBtZWRpYSBkZSByZXNwdWVzdGEgZGUgYW1ib3MgdHJhdGFtaWVudG9zIGFsIG5pdmVsIGRlIHNpZ25pZmljYWNpw7NuIGZpamFkby4iXSwiY29ycmVjdEluZGV4IjozLCJyYXRpb25hbGUiOiJMYSBwZXJ0ZW5lbmNpYSBhbCBtaXNtbyBncnVwbyBob21vZ8OpbmVvIHNlw7FhbGEgcXVlIGVsIGNvbnRyYXN0ZSBlbnRyZSBlc29zIGRvcyB0cmF0YW1pZW50b3MgcGFydGljdWxhcmVzIG5vIHJlc3VsdGEgc2lnbmlmaWNhdGl2by4iLCJoaW50IjoiUmVjdWVyZGEgbGEgY29uZGljacOzbiBuZWNlc2FyaWEgcGFyYSBjb25zaWRlcmFyIHF1ZSBkb3Mgbml2ZWxlcyBkZWwgZmFjdG9yIHBlcnRlbmVjZW4gYWwgbWlzbW8gZ3J1cG8gaG9tb2fDqW5lby4ifSx7InF1ZXN0aW9uIjoiU2kgZWwgc3VwdWVzdG8gZGUgbm9ybWFsaWRhZCBubyBzZSBzb3N0aWVuZSBlbiB1biBlc3R1ZGlvIGNvbiBtdWVzdHJhcyBwZXF1ZcOxYXMgKCRuX2kgPCAzMCQpLCDCv2N1w6FsIGVzIGVsIHByb2NlZGltaWVudG8gZ2xvYmFsIG5vIHBhcmFtw6l0cmljbyBhZGVjdWFkbyB5IHF1w6kgZnVuY2nDs24gZGUgUiBzZSB1dGlsaXphIHBhcmEgZXN0dWRpYXIgcG9zdGVyaW9ybWVudGUgbGFzIGRpZmVyZW5jaWFzIHBvciBwYXJlamFzPyIsIm9wdGlvbnMiOlsiRWwgdGVzdCBkZSBMZXZlbmUgY29tbyB0ZXN0IGdsb2JhbCB5IGxhIGZ1bmNpw7NuIGBzdW1tYXJ5LmxtYCBwYXJhIGxhcyBjb21wYXJhY2lvbmVzIGRvcyBhIGRvcy4iLCJFbCBjb250cmFzdGUgZGUgS3J1c2thbC1XYWxsaXMgY29tbyB0ZXN0IGdsb2JhbCB5IGxhIGZ1bmNpw7NuIGBwYWlyd2lzZS53aWxjb3gudGVzdGAgcGFyYSBsYXMgY29tcGFyYWNpb25lcyBkb3MgYSBkb3MuIiwiRWwgQU5PVkEgZGUgV2VsY2ggY29tbyB0ZXN0IGdsb2JhbCB5IGxhIGZ1bmNpw7NuIGBwYWlyd2lzZS50LnRlc3RgIGNvbiBgcG9vbC5zZD1GQUxTRWAgcGFyYSBsYXMgY29tcGFyYWNpb25lcyBkb3MgYSBkb3MuIiwiRWwgdGVzdCBkZSBUdWtleSBjb21vIHRlc3QgZ2xvYmFsIHkgbGEgZnVuY2nDs24gYHNoYXBpcm8udGVzdGAgcGFyYSBsYXMgY29tcGFyYWNpb25lcyBkb3MgYSBkb3MuIl0sImNvcnJlY3RJbmRleCI6MSwicmF0aW9uYWxlIjoiS3J1c2thbC1XYWxsaXMgZXMgbGEgYWx0ZXJuYXRpdmEgbm8gcGFyYW3DqXRyaWNhIGFsIEFOT1ZBIHkgbGFzIGNvbXBhcmFjaW9uZXMgZGUgV2lsY294b24gYW5hbGl6YW4gcG9zdGVyaW9ybWVudGUgbG9zIHJhbmdvcyBwb3IgcGFyZWphcy4iLCJoaW50IjoiQnVzY2EgbGEgcHJ1ZWJhIG5vIHBhcmFtw6l0cmljYSBlcXVpdmFsZW50ZSBhbCBBTk9WQSBkZSB1biBmYWN0b3IgeSBzdSBjb3JyZXNwb25kaWVudGUgcHJ1ZWJhIGRlIHJhbmdvcy9XaWxjb3hvbiBwb3IgcGFyZWphcy4ifSx7InF1ZXN0aW9uIjoiRW4gdW4gbW9kZWxvIGxpbmVhbCBlcXVpdmFsZW50ZSBhbCBBTk9WQSBwYXJhIGNvbXBhcmFyIDUgcmVwZWxlbnRlcyBkb25kZSAnT2RvbW9zJyBlcyBlbCBncnVwbyBkZSByZWZlcmVuY2lhLCBlbCBjb2VmaWNpZW50ZSBlc3RpbWFkbyBwYXJhIGVsIHJlcGVsZW50ZSAnQytPJyBlcyAkXFxoYXR7XFxiZXRhfV97XFx0ZXh0e0MrT319ID0gLTIuNTMzNyQgKCRwID0gMC4wMDI2NiQpLiDCv1F1w6kgY29uY2x1eWUgZXN0YSBlc3RpbWFjacOzbiByZXNwZWN0byBhbCB0cmF0YW1pZW50byBkZSByZWZlcmVuY2lhPyIsIm9wdGlvbnMiOlsiTGEgdGFzYSBtZWRpYSBlc3RpbWFkYSBkZSBwaWNhZHVyYXMgcGFyYSBlbCByZXBlbGVudGUgQytPIGVzIHNpZ25pZmljYXRpdmFtZW50ZSBtZW5vciBxdWUgbGEgZGUgT2RvbW9zIGVuIGFwcm94aW1hZGFtZW50ZSAyLjUzIHVuaWRhZGVzLiIsIkxhIG1lZGlhIGdsb2JhbCBkZSBwaWNhZHVyYXMgZGUgdG9kYXMgbGFzIG9ic2VydmFjaW9uZXMgZGlzbWludXllICQyLjUzJCB1bmlkYWRlcyBhbCBpbmNvcnBvcmFyIGxhIHZhcmlhYmxlIGV4cGxpY2F0aXZhIEMrTy4iLCJObyBleGlzdGVuIGRpZmVyZW5jaWFzIHNpZ25pZmljYXRpdmFzIGVudHJlIEMrTyB5IE9kb21vcyBwb3JxdWUgbG9zIGNvZWZpY2llbnRlcyBuZWdhdGl2b3Mgbm8gbW9kaWZpY2FuIGVsIGFqdXN0ZSBnbG9iYWwuIiwiRWwgdHJhdGFtaWVudG8gQytPIGVzIHVuICQyLjUzXFwlJCBtZW5vcyBlZmVjdGl2byBxdWUgZWwgdHJhdGFtaWVudG8gT2RvbW9zIGVuIGxhIG11ZXN0cmEgYW5hbGl6YWRhLiJdLCJjb3JyZWN0SW5kZXgiOjAsInJhdGlvbmFsZSI6IkVsIGNvZWZpY2llbnRlIG5lZ2F0aXZvIG1pZGUgZWwgZGVjcmVtZW50byBkaXJlY3RvIGRlIGxhIG1lZGlhIGRlbCBuaXZlbCBjb25zaWRlcmFkbyBjb24gcmVzcGVjdG8gYSBsYSBtZWRpYSBkZWwgbml2ZWwgdG9tYWRvIGNvbW8gcmVmZXJlbmNpYS4iLCJoaW50IjoiRXZhbMO6YSBjw7NtbyBzZSBjYWxjdWxhIGxhIG1lZGlhIGVzcGVyYWRhIGRlbCBncnVwbyBlbiBwcmVzZW5jaWEgZGUgdW5hIHZhcmlhYmxlIGluZGljYWRvcmEgY3V5byBjb2VmaWNpZW50ZSBlcyBuZWdhdGl2by4ifV0=')).getDataAsString('UTF-8'));
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
      question: plainText_(question.question),
      options: question.options.map(plainText_)
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

  const row = [new Date(), safeSheetText_(name), correctCount, correctCount];
  answers.forEach((answer, index) => {
    row.push(String.fromCharCode(65 + answer));
    row.push(answer === questions[index].correctIndex);
  });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    SpreadsheetApp.openById(sheetId).getSheetByName('Respuestas').appendRow(row);
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
        question: plainText_(question.question),
        selectedIndex: answer,
        correctIndex: question.correctIndex,
        selectedText: plainText_(question.options[answer]),
        correctText: plainText_(question.options[question.correctIndex]),
        correct: answer === question.correctIndex,
        rationale: plainText_(question.rationale || ''),
        hint: plainText_(question.hint || '')
      };
    })
  };
}

function loadQuestions_() {
  const sheetId = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!sheetId) throw new Error('El cuestionario aún no está configurado. Avisa al profesor.');
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName('Preguntas');
  if (!sheet) throw new Error('No se encuentra la pestaña Preguntas. Avisa al profesor.');
  const rows = sheet.getDataRange().getValues().slice(1).filter(row => String(row[0] || '').trim());
  const questions = rows.map((row, index) => {
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
      rationale: String(row[6] || ''),
      hint: String(row[7] || '')
    };
  });
  if (questions.length !== ANOVA_QUESTIONS.length) {
    throw new Error('La hoja Preguntas debe conservar las 12 preguntas de este piloto.');
  }
  return questions;
}

function plainText_(value) {
  const normalized = String(value || '').replace(/\text\{/g, '\\text{');
  return normalized.replace(/\$([^$]+)\$/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\((.*?)\\\)/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, expression) => latexToPlainText_(expression));
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
