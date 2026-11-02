const REGRESSION_QUESTIONS = JSON.parse(Utilities.newBlob(Utilities.base64Decode('W3sicXVlc3Rpb24iOiJFbiB1biBtb2RlbG8gZGUgcmVncmVzacOzbiBsaW5lYWwgbcO6bHRpcGxlIGNvbiAkcCQgdmFyaWFibGVzIGV4cGxpY2F0aXZhcywgwr9jw7NtbyBzZSBpbnRlcnByZXRhIGRlIGZvcm1hIHByZWNpc2EgZWwgcGFyw6FtZXRybyAkXFxiZXRhX2okIGFzb2NpYWRvIGEgbGEgdmFyaWFibGUgJFhfaiQ/Iiwib3B0aW9ucyI6WyJFcyBlbCB2YWxvciBtZWRpbyBxdWUgYWRvcHRhIGxhIHJlc3B1ZXN0YSAkWSQgY3VhbmRvIMO6bmljYW1lbnRlIGxhIHZhcmlhYmxlIGV4cGxpY2F0aXZhICRYX2okIHRvbWEgZWwgdmFsb3IgY2Vyby4iLCJFcyBlbCBjYW1iaW8gYWJzb2x1dG8gZXNwZXJhZG8gZW4gbGEgdmFyaWFibGUgcmVzcHVlc3RhICRZJCBwb3IgY2FkYSB1bmlkYWQgZGUgY2FtYmlvIGVuICRYX2okLCBpbmRlcGVuZGllbnRlbWVudGUgZGUgbGFzIGRlbcOhcyB2YXJpYWJsZXMuIiwiUmVwcmVzZW50YSBsYSBwcm9wb3JjacOzbiBkZSB2YXJpYWJpbGlkYWQgdG90YWwgZGUgJFkkIHF1ZSBlcyBleHBsaWNhZGEgZGUgZm9ybWEgZXhjbHVzaXZhIHBvciBsYSB2YXJpYWJsZSAkWF9qJC4iLCJFcyBlbCBjYW1iaW8gZW4gZWwgdmFsb3IgbWVkaW8gZGUgbGEgcmVzcHVlc3RhICRZJCBhc29jaWFkbyBhIHVuIGF1bWVudG8gZGUgdW5hIHVuaWRhZCBlbiAkWF9qJCwgbWFudGVuaWVuZG8gY29uc3RhbnRlcyBsYXMgZGVtw6FzIHZhcmlhYmxlcyBkZWwgbW9kZWxvLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IlJlZmxlamEgbGEgYXNvY2lhY2nDs24gbGluZWFsIGVzcGVjw61maWNhIGFqdXN0YWRhIGVudHJlICRYX2okIHkgZWwgdmFsb3IgZXNwZXJhZG8gZGUgJFkkIHRyYXMgY29udHJvbGFyIGVsIGVmZWN0byBzaW11bHTDoW5lbyBkZWwgcmVzdG8gZGUgcHJlZGljdG9yZXMuIiwiaGludCI6IlJlY3VlcmRhIHF1ZSBsYSByZWdyZXNpw7NuIG3Dumx0aXBsZSBldmFsw7phIGVsIGVmZWN0byBpbmRpdmlkdWFsIGRlIHVuYSB2YXJpYWJsZSBhaXNsYW5kbyBsYSBpbmZsdWVuY2lhIGRlbCByZXN0byBkZSBwcmVkaWN0b3Jlcy4ifSx7InF1ZXN0aW9uIjoiQW5hbGl6YW5kbyBsYSBjYXBhY2lkYWQgZXhwbGljYXRpdmEgZGVsIG1vZGVsbywgwr9jdcOhbCBlcyBlbCBpbmNvbnZlbmllbnRlIHByaW5jaXBhbCBkZWwgY29lZmljaWVudGUgZGUgZGV0ZXJtaW5hY2nDs24gJFJeMiQgYSBsYSBob3JhIGRlIGNvbXBhcmFyIG1vZGVsb3MgZGUgZGlzdGludGEgY29tcGxlamlkYWQ/Iiwib3B0aW9ucyI6WyJTdXMgdmFsb3JlcyBwdWVkZW4gdG9tYXIgbWFnbml0dWRlcyBuZWdhdGl2YXMgY3VhbmRvIGVsIG7Dum1lcm8gZGUgdmFyaWFibGVzICRwJCBzdXBlcmEgYWwgbsO6bWVybyBkZSBvYnNlcnZhY2lvbmVzICRuJC4iLCJFcyBleHRyZW1hZGFtZW50ZSBzZW5zaWJsZSBhIGxhcyB1bmlkYWRlcyBkZSBtZWRpZGEgZW1wbGVhZGFzIGVuIGxhIHZhcmlhYmxlIHJlc3B1ZXN0YSAkWSQuIiwiQXN1bWUgb2JsaWdhdG9yaWFtZW50ZSBxdWUgbG9zIHTDqXJtaW5vcyBkZSBlcnJvciBkZWwgbW9kZWxvIHNpZ3VlbiB1bmEgZGlzdHJpYnVjacOzbiBub3JtYWwgY2VudHJhZGEgZW4gY2Vyby4iLCJOdW5jYSBkaXNtaW51eWUgYWwgaW5jb3Jwb3JhciBudWV2YXMgdmFyaWFibGVzIGV4cGxpY2F0aXZhcywgYXVucXVlIGVzdGFzIGFwb3J0ZW4gaW5mb3JtYWNpw7NuIGlycmVsZXZhbnRlLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkxhIHN1bWEgZGUgY3VhZHJhZG9zIHJlc2lkdWFsZXMgJFNDX3tyZXN9JCBubyBhdW1lbnRhIGFsIGHDsWFkaXIgdMOpcm1pbm9zLCBsbyBxdWUgaGFjZSBxdWUgJFJeMiQgc2VhIG1vbsOzdG9uYW1lbnRlIG5vIGRlY3JlY2llbnRlIHJlc3BlY3RvIGFsIG7Dum1lcm8gZGUgcHJlZGljdG9yZXMuIiwiaGludCI6IlBpZW5zYSBlbiBxdcOpIGxlIG9jdXJyZSBhIGxhIHN1bWEgZGUgY3VhZHJhZG9zIGRlIGxvcyByZXNpZHVvcyBjdWFuZG8gYcOxYWRlcyBjdWFscXVpZXIgdmFyaWFibGUgYWRpY2lvbmFsIGFsIGNyaXRlcmlvIGRlIG3DrW5pbW9zIGN1YWRyYWRvcy4ifSx7InF1ZXN0aW9uIjoiQWwgaW50ZXJwcmV0YXIgdW4gZ3LDoWZpY28gY3VhbnRpbC1jdWFudGlsIChRLVEgcGxvdCkgZGUgbG9zIHJlc2lkdW9zIGRlIHVuIG1vZGVsbyBhanVzdGFkbywgwr9xdcOpIGNvbXBvcnRhbWllbnRvIGluZGljYSB1biBpbmN1bXBsaW1pZW50byBkZSBsYSBjb25kaWNpw7NuIGRlIG5vcm1hbGlkYWQ/Iiwib3B0aW9ucyI6WyJVbmEgYWN1bXVsYWNpw7NuIHNpbcOpdHJpY2EgZGUgcHVudG9zIGFscmVkZWRvciBkZSBsYSBtZWRpYW5hIGRlIGxhIGRpc3RyaWJ1Y2nDs24gcmVzaWR1YWwuIiwiTGEgcHJlc2VuY2lhIGRlIHVuYSBhbXBsaXR1ZCB2ZXJ0aWNhbCBjcmVjaWVudGUgZW4gbG9zIHB1bnRvcyBhIG1lZGlkYSBxdWUgYXVtZW50YW4gbG9zIGN1YW50aWxlcyB0ZcOzcmljb3MuIiwiVW5hIGRpc3RyaWJ1Y2nDs24gZW4gbGEgcXVlIGxvcyBwdW50b3Mgc2Ugc2l0w7phbiBtYXlvcml0YXJpYW1lbnRlIHNvYnJlIGxhIHJlY3RhIGRpYWdvbmFsIHRlw7NyaWNhIGNlbnRyYWRhIGVuIGNlcm8uIiwiVW5hIGRpc3Bvc2ljacOzbiBkZSBsb3MgcHVudG9zIHF1ZSBkaWJ1amEgdW5hIGN1cnZhdHVyYSBwcm9udW5jaWFkYSBvIGRlc3ZpYWNpb25lcyBzaXN0ZW3DoXRpY2FzIGZ1ZXJhIGRlIGxhIGJhbmRhIGRlIHJlZmVyZW5jaWEgZW4gbGFzIGNvbGFzLiJdLCJjb3JyZWN0SW5kZXgiOjMsInJhdGlvbmFsZSI6IkxhcyBkZXN2aWFjaW9uZXMgcmVzcGVjdG8gYSBsYSByZWN0YSB0ZcOzcmljYSBpbmRpY2FuIHF1ZSBsb3MgY3VhbnRpbGVzIG11ZXN0cmFsZXMgZGUgbG9zIHJlc2lkdW9zIGRpZmllcmVuIGRlIGxvcyBjdWFudGlsZXMgdGXDs3JpY29zIGRlIGxhIGRpc3RyaWJ1Y2nDs24gbm9ybWFsLiIsImhpbnQiOiJDw6ludHJhdGUgZW4gY8OzbW8gc2UgY29tcGFyYSBsYSBkaXN0cmlidWNpw7NuIGVtcMOtcmljYSBkZSBsb3MgcmVzaWR1b3MgZnJlbnRlIGEgbGEgcmVjdGEgZGUgcmVmZXJlbmNpYSBkZSBsYSBkaXN0cmlidWNpw7NuIHRlw7NyaWNhICROKDAsIFxcc2lnbWFeMikkLiJ9LHsicXVlc3Rpb24iOiJDb25zaWRlcmUgZWwgbW9kZWxvIGNvbiBpbnRlcmFjY2nDs24gJFlfaSA9IFxcYmV0YV8wICsgXFxiZXRhXzEgWF97MWl9ICsgXFxiZXRhXzIgWF97Mml9ICsgXFxiZXRhXzMgWF97MWl9WF97Mml9ICsgXFx2YXJlcHNpbG9uX2kkLiDCv0N1w6FsIGVzIGVsIGNhbWJpbyBlbiBlbCB2YWxvciBtZWRpbyBkZSAkWSQgcG9yIGNhZGEgdW5pZGFkIGRlIGF1bWVudG8gZW4gJFhfMSQ/Iiwib3B0aW9ucyI6WyIkXFxiZXRhXzEgKyBcXGJldGFfMyBYXzIkLCBsbyBxdWUgc2lnbmlmaWNhIHF1ZSBlbCBlZmVjdG8gZGUgJFhfMSQgZGVwZW5kZSBleHBsw61jaXRhbWVudGUgZGVsIHZhbG9yIHF1ZSB0b21lICRYXzIkLiIsIiRcXGJldGFfMSArIFxcYmV0YV8zJCwgcGVybWFuZWNpZW5kbyBjb25zdGFudGUgcGFyYSBjdWFscXVpZXIgdmFsb3Igb2JzZXJ2YWRvIGVuIGxhIG11ZXN0cmEuIiwiJFxcYmV0YV8xJCwgYWN0dWFuZG8gZWwgdMOpcm1pbm8gJFxcYmV0YV8zIFhfMSBYXzIkIMO6bmljYW1lbnRlIGNvbW8gY29ycmVjY2nDs24gc29icmUgZWwgaW50ZXJjZXB0byBkZWwgbW9kZWxvLiIsIiRcXGJldGFfMSBcXGNkb3QgXFxiZXRhXzMgWF8yJCwgcmVwcmVzZW50YW5kbyB1bmEgcmVsYWNpw7NuIGRlIHByb3BvcmNpb25hbGlkYWQgbXVsdGlwbGljYXRpdmEgZXN0cmljdGEuIl0sImNvcnJlY3RJbmRleCI6MCwicmF0aW9uYWxlIjoiQWwgcmVvcmRlbmFyIGxhIGVjdWFjacOzbiBjb21vICQoXFxiZXRhXzEgKyBcXGJldGFfMyBYXzIpIFhfMSQsIHNlIG9ic2VydmEgcXVlIGxhIHBlbmRpZW50ZSBwYXJjaWFsIGRlICRYXzEkIGVzIHVuYSBmdW5jacOzbiBsaW5lYWwgZGUgJFhfMiQuIiwiaGludCI6IkZhY3Rvcml6YSBsYSBleHByZXNpw7NuIGxpbmVhbCBkZWwgbW9kZWxvIHBhcmEgYWlzbGFyIGVsIGZhY3RvciBjb23Dum4gJFhfMSQgeSBleGFtaW5hIGVsIGNvZWZpY2llbnRlIHJlc3VsdGFudGUuIn0seyJxdWVzdGlvbiI6IkVuIGxhIGV2YWx1YWNpw7NuIGdyw6FmaWNhIGRlIHVuIG1vZGVsbyBkZSByZWdyZXNpw7NuLCDCv3F1w6kgcGF0csOzbiBlbiBlbCBncsOhZmljbyBkZSByZXNpZHVvcyBmcmVudGUgYSB2YWxvcmVzIGFqdXN0YWRvcyAoJFxcaGF0e1xcdmFyZXBzaWxvbn1faSQgZnJlbnRlIGEgJFxcaGF0e3l9X2kkKSByZXZlbGEgdW4gcHJvYmxlbWEgZGUgaGV0ZXJvY2VkYXN0aWNpZGFkPyIsIm9wdGlvbnMiOlsiVW5hIGRpc3BlcnNpw7NuIHZlcnRpY2FsIGRlIGxvcyByZXNpZHVvcyBxdWUgYXVtZW50YSBvIGRpc21pbnV5ZSBkZSBmb3JtYSBzaXN0ZW3DoXRpY2EgY29uIGxhIG1hZ25pdHVkIGRlIGxvcyB2YWxvcmVzIGFqdXN0YWRvcyAoZm9ybWEgZGUgZW1idWRvKS4iLCJVbmEgdHJheWVjdG9yaWEgZGUgbG9zIHJlc2lkdW9zIGNvbiB0ZW5kZW5jaWEgbWFyY2FkYW1lbnRlIHBhcmFiw7NsaWNhIG8gZW4gZm9ybWEgZGUgJ1UnLiIsIlVuYSBjb3JyZWxhY2nDs24gZGUgcmVzaWR1b3MgdmVjaW5vcyBxdWUgbXVlc3RyYW4gcGF0cm9uZXMgb3NjaWxhdG9yaW9zIG9yZGVuYWRvcyBlbiBlbCB0aWVtcG8uIiwiVW5hIG51YmUgYWxlYXRvcmlhIGRlIHB1bnRvcyBkaXN0cmlidWlkYSBob21vZ8OpbmVhbWVudGUgYWxyZWRlZG9yIGRlIGxhIGzDrW5lYSBob3Jpem9udGFsIGRlIGNlcm8uIl0sImNvcnJlY3RJbmRleCI6MCwicmF0aW9uYWxlIjoiTGEgdmFyaWFjacOzbiBlbiBlbCBhbmNobyBkZSBsYSBudWJlIGRlIHB1bnRvcyBldmlkZW5jaWEgcXVlIGxhIHZhcmlhbnphIHJlc2lkdWFsICRcXHRleHR7VmFyfShcXHZhcmVwc2lsb25faSkgPSBcXHNpZ21hXjIkIG5vIGVzIGNvbnN0YW50ZSBhIGxvIGxhcmdvIGRlbCByYW5nbyBkZSBwcmVkaWNjacOzbi4iLCJoaW50IjoiTGEgaG9tb2NlZGFzdGljaWRhZCBleGlnZSB2YXJpYW56YSBjb25zdGFudGUgZGUgbG9zIGVycm9yZXM7IGJ1c2NhIGVsIHBhdHLDs24gdmlzdWFsIHF1ZSByZXByZXNlbnRhIHZhcmlhYmlsaWRhZCBubyB1bmlmb3JtZS4ifSx7InF1ZXN0aW9uIjoiRW4gZWwgbW9kZWxvIGFqdXN0YWRvIGBQZXNvIH4gRWRhZCArIFZlcmR1cmFzYCwgc2Ugb2J0aWVuZSB1biBjb2VmaWNpZW50ZSBlc3RpbWFkbyBwYXJhIGBWZXJkdXJhc2AgZGUgJC04eyx9NTIxMiQga2cva2cuIMK/Q3XDoWwgZXMgbGEgaW50ZXJwcmV0YWNpw7NuIGVzdGFkw61zdGljYW1lbnRlIGFkZWN1YWRhIGRlIGVzdGUgcmVzdWx0YWRvPyIsIm9wdGlvbnMiOlsiQ2FkYSBhw7FvIGFkaWNpb25hbCBkZSBlZGFkIHByb3ZvY2EgdW5hIHJlZHVjY2nDs24gZGVsIHBlc28gZXF1aXZhbGVudGUgYSAkOHssfTUyJCBrZyBhanVzdGFkbyBwb3IgdmVyZHVyYXMuIiwiRWwgcGVzbyBtZWRpbyBlc3BlcmFkbyBkZSB1biBpbmRpdmlkdW8gZGUgY2VybyBhw7FvcyBxdWUgbm8gY29uc3VtZSB2ZXJkdXJhcyBlcyBkZSAkLTh7LH01MiQga2cuIiwiRWwgY29uc3VtbyBlbGV2YWRvIGRlIHZlcmR1cmFzIHByb2R1Y2UgZGlyZWN0YW1lbnRlIHVuYSBww6lyZGlkYSBkZSBwZXNvIGRlICQ4eyx9NTIkIGtnIGVuIGxvcyBuacOxb3MgYW5hbGl6YWRvcy4iLCJNYW50ZW5pZW5kbyBjb25zdGFudGUgbGEgZWRhZCwgdW4gaW5jcmVtZW50byBkZSAxIGtnIGVuIGVsIGNvbnN1bW8gZGlhcmlvIGRlIHZlcmR1cmFzIHNlIGFzb2NpYSBhIHVuYSBkaXNtaW51Y2nDs24gbWVkaWEgZXN0aW1hZGEgZGUgJDh7LH01MiQga2cgZW4gZWwgcGVzby4iXSwiY29ycmVjdEluZGV4IjozLCJyYXRpb25hbGUiOiJFeHByZXNhIGNvcnJlY3RhbWVudGUgbGEgYXNvY2lhY2nDs24gYWp1c3RhZGEgY29uZGljaW9uYWwgZW4gbGFzIHVuaWRhZGVzIG9yaWdpbmFsZXMgeSBtYW50ZW5pZW5kbyBjb25zdGFudGUgZWwgb3RybyBwcmVkaWN0b3IgZGVsIG1vZGVsby4iLCJoaW50IjoiQXNlZ8O6cmF0ZSBkZSBkaWZlcmVuY2lhciBlbnRyZSB1bmEgYXNvY2lhY2nDs24gYWp1c3RhZGEgZW4gZGF0b3Mgb2JzZXJ2YWNpb25hbGVzIHkgdW5hIGNhdXNhbGlkYWQsIG1hbnRlbmllbmRvIGZpam9zIGxvcyBkZW3DoXMgcHJlZGljdG9yZXMuIn0seyJxdWVzdGlvbiI6IkVuIGVsIHByb2NlZGltaWVudG8gZGUgc2VsZWNjacOzbiBhdXRvbcOhdGljYSBkZSB2YXJpYWJsZXMgaGFjaWEgYXRyw6FzICgqYmFja3dhcmQgZWxpbWluYWNpw7NuKiksIMK/Y3XDoWwgZXMgbGEgc2VjdWVuY2lhIGLDoXNpY2EgcXVlIHNlIHNpZ3VlIHBhcmEgZGV0ZXJtaW5hciBlbCBtb2RlbG8gZmluYWw/Iiwib3B0aW9ucyI6WyJQYXJ0aXIgZGUgdW4gbW9kZWxvIHF1ZSDDum5pY2FtZW50ZSBjb250aWVuZSBlbCBpbnRlcmNlcHRvIGUgaW5jb3Jwb3JhciBwYXVsYXRpbmFtZW50ZSB2YXJpYWJsZXMgc2Vnw7puIGVsIHZhbG9yIG3DoXMgYWx0byBkZWwgZXN0YWTDrXN0aWNvICR0JC4iLCJFbGltaW5hciBkZSBmb3JtYSBzaW11bHTDoW5lYSBlbiBlbCBwcmltZXIgcGFzbyB0b2RhcyBsYXMgdmFyaWFibGVzIGN1eW9zIGNvZWZpY2llbnRlcyBpbmRpdmlkdWFsZXMgcHJlc2VudGVuICRwID4gMHssfTA1JC4iLCJFdmFsdWFyIGRlIGZvcm1hIGluZGVwZW5kaWVudGUgbGFzIGNvcnJlbGFjaW9uZXMgc2ltcGxlcyBkZSBjYWRhIHByZWRpY3RvciBjb24gbGEgcmVzcHVlc3RhIHkgY29uc2VydmFyIGxvcyBxdWUgdGVuZ2FuICRyID4gMHssfTUwJC4iLCJDb21lbnphciBjb24gZWwgbW9kZWxvIHF1ZSBpbmNsdXllIHRvZG9zIGxvcyB0w6lybWlub3MgY2FuZGlkYXRvcyB5IGVsaW1pbmFyIGl0ZXJhdGl2YW1lbnRlIGFxdWVsbG9zIGN1eWEgcmV0aXJhZGEgbWVqb3JlIGVsIGNyaXRlcmlvIGRlIGFqdXN0ZS9jb21wbGVqaWRhZC4iXSwiY29ycmVjdEluZGV4IjozLCJyYXRpb25hbGUiOiJJbmljaWEgZGVzZGUgbGEgZXN0cnVjdHVyYSBtw6F4aW1hIChtb2RlbG8gc2F0dXJhZG8pIHkgc2ltcGxpZmljYSByZWR1Y2llbmRvIHN1Y2VzaXZhbWVudGUgbG9zIHTDqXJtaW5vcyBtZW5vcyByZWxldmFudGVzIGhhc3RhIG9wdGltaXphciBsYSBtw6l0cmljYSAoZWouIEFJQykuIiwiaGludCI6IkVsIG5vbWJyZSAnYmFja3dhcmQnIChoYWNpYSBhdHLDoXMpIHN1Z2llcmUgZW1wZXphciBkZXNkZSBsYSBtw6F4aW1hIGNvbXBsZWppZGFkIHBvc2libGUgZSBpciBkZXNudWRhbmRvIGVsIG1vZGVsbyBwYXNvIGEgcGFzby4ifV0=')).getDataAsString('UTF-8'));
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
  summary.getRange('B3').setFormula('=IFERROR(AVERAGE(Respuestas!C2:C);0)');
  summary.getRange('A5:C5').setValues([['Pregunta', 'Respuestas', 'Porcentaje de acierto']]);
  REGRESSION_QUESTIONS.forEach((question, index) => {
    const responseColumn = 5 + index * 2;
    const correctColumn = responseColumn + 1;
    const responseLetter = columnLetter_(responseColumn);
    const correctLetter = columnLetter_(correctColumn);
    const row = 6 + index;
    summary.getRange(row, 1).setValue((index + 1) + '. ' + plainText_(question.question));
    summary.getRange(row, 2).setFormula('=COUNTA(Respuestas!' + responseLetter + '2:' + responseLetter + ')');
    summary.getRange(row, 3).setFormula('=IFERROR(COUNTIF(Respuestas!' + correctLetter + '2:' + correctLetter + ';TRUE)/B' + row + ';0)');
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
