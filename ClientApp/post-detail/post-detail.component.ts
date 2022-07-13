import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sortPref = "popular";
  }

  public sortChange = false;
  public sortPref;
  toggleSort() {
    this.sortChange = !this.sortChange;
  }
  changeSort() {
  }
  parentmenuLists = ['CSS', 'Python'];
  parentmenuLists2 = ['C++'];
    parentCodeCSS = `.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  margin: 1em;
  position: relative;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;
    parentCodePython = `# Python3 code to demonstrate working of
# Group keys with similar values in Dictionary
# Using loop + any() + len()

# initializing dictionary
test_dict = {"Gfg": [5, 6], "is": [8, 6, 9],
             "best": [10, 9], "for": [5, 2],
             "geeks": [19]}

# printing original dictionary
print("The original dictionary is : " + str(test_dict))

res = []
for key in test_dict:
    chr = [key]
    for ele in test_dict:

        # check with other keys
        if key != ele:

            # checking for any match in values
            if any(i == j for i in test_dict[key] for j in test_dict[ele]):
                chr.append(ele)
    if len(chr) > 1:
        res.append(chr)

# printing result
print("The dictionary after values replacement : " + str(res))
`;
    parentCodeCplus = `#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\"; // this is an error

  return -2e3 + 12l;
}`;
}
