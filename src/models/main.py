import os
import numpy as np

filesName = []

path = './Buildings'

files = os.listdir(path)

for f in files:
    name = []
    child = './Buildings/' + f
    childFile = os.listdir(child)
    if(childFile != './Buildings/text.txt'):
        for c in childFile:
            name.append('npx gltfjsx '+c)
    print(c)
    np.savetxt("./Buildings/"+f+"/text.txt", name, fmt='%s')

    # files = os.listdir(path)

    # for f in files:
    #     filesName.append('npx gltfjsx '+f)

    # # print(filesName)

    # filesName = np.array(filesName)

    # np.savetxt("./Buildings/accBase/text.txt", filesName, fmt='%s')
