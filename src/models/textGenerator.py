import os
import numpy as np

path = './buildings'

files = os.listdir(path)

for f in files:
    name = []
    child = './buildings/' + f
    childFile = os.listdir(child)
    if(childFile != './buildings/text.txt'):
        for c in childFile:
            name.append('import '+c+" from './"+c+"'")
    print(c)

    # files = os.listdir(path)

    # for f in files:
    #     filesName.append('npx gltfjsx '+f)

    # # print(filesName)

    # filesName = np.array(filesName)

    # np.savetxt("./Buildings/accBase/text.txt", filesName, fmt='%s')
