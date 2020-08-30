import os
import sys

filename = 'test.txt'

if os.path.exists(filename):
    append_write = 'a'
else:
    append_write = 'w'

f = open(filename, append_write)
for i in range(len(sys.argv)):
    f.write(sys.argv[i] + '\n')

f.close