import math
import mmh3
str_word_2 = "#SEKAICTF #DEUTERIUM #DIFFECIENTWO #CRYPTO"
encorded_str_word_2 = str_word_2.encode().hex("-")
str_mmh3 = mmh3.hash(b"#SEKAICTF #DEUTERIUM #DIFFECIENTWO #CRYPTO")

print(f"{str_word_2}:\n {encorded_str_word_2}")
print(bytes.fromhex("2353454b4149435446202344455554455249554d202344494646454349454e54574f202343525950544f"))
s = set()
for i in range(64):
  s.add(mmh3.hash(b"#SEKAICTF #DEUTERIUM #DIFFECIENTWO #CRYPTO", i)%(2**32-5))
print(len(s))
for i in s:
    print(i)
#print(bytes.hex(""))