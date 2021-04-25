import React from "react";

const CategoriesMenu = () => {
  const hoverOnCategory = (x) => {};

  const hoverOffCategory = () => {};

  const clickOnCategory = () => {};

  const sortedCategories = [
    {
      name: "New",
      id: 1,
      children: [
        {
          name: "Women",
          id: 67,
          children: [
            {
              name: "x",
              id: 23,
            },
            {
              name: "x",
              id: 34,
            },
          ],
        },
        {
          name: "Men",
          id: 5,
          children: [
            {
              name: "y",
              id: 43,
            },
            {
              name: "y",
              id: 33,
            },
          ],
        },
      ],
    },
    {
      name: "Women",
      id: 1,
      children: [
        {
          name: "Women",
          id: 67,
          children: [
            {
              name: "x",
              id: 23,
            },
            {
              name: "x",
              id: 34,
            },
          ],
        },
        {
          name: "Men",
          id: 5,
          children: [
            {
              name: "y",
              id: 43,
            },
            {
              name: "y",
              id: 33,
            },
          ],
        },
      ],
    },
    {
      name: "Men",
      id: 1,
      children: [
        {
          name: "Women",
          id: 67,
          children: [
            {
              name: "x",
              id: 23,
            },
            {
              name: "x",
              id: 34,
            },
          ],
        },
        {
          name: "Men",
          id: 5,
          children: [
            {
              name: "y",
              id: 43,
            },
            {
              name: "y",
              id: 33,
            },
          ],
        },
      ],
    },
    {
      name: "Accessories",
      id: 1,
      children: [
        {
          name: "Women",
          id: 67,
          children: [
            {
              name: "x",
              id: 23,
            },
            {
              name: "x",
              id: 34,
            },
          ],
        },
        {
          name: "Men",
          id: 5,
          children: [
            {
              name: "y",
              id: 43,
            },
            {
              name: "y",
              id: 33,
            },
          ],
        },
      ],
    },
    {
      name: "Sale",
      id: 1,
      children: [
        {
          name: "Women",
          id: 67,
          children: [
            {
              name: "x",
              id: 23,
            },
            {
              name: "x",
              id: 34,
            },
          ],
        },
        {
          name: "Men",
          id: 5,
          children: [
            {
              name: "y",
              id: 43,
            },
            {
              name: "y",
              id: 33,
            },
          ],
        },
      ],
    },
  ];

  return (
    <nav>
      {sortedCategories && sortedCategories.length && (
        <ul>
          {sortedCategories.map((category1stLevel) => {
            return (
              <li
                className="position-static"
                key={category1stLevel.id}
                onMouseEnter={() => hoverOnCategory(category1stLevel)}
                onMouseLeave={() => hoverOffCategory()}
                data-test="category-1st-level"
              >
                <a
                  onClick={() => clickOnCategory()}
                  className={category1stLevel.name ? "active" : ""}
                  data-test="category-1st-level-link"
                >
                  {category1stLevel.name.toUpperCase()}
                </a>

                {category1stLevel.children.length && (
                  <ul
                    className="mega-menu"
                    className={
                      category1stLevel.children.length === 2
                        ? "menu-2-col mega-menu-width3"
                        : "mega-menu-width3"
                    }
                  >
                    <li>
                      <ul className="mega-menu-width4">
                        {category1stLevel.children.map((category2ndLevel) => {
                          return (
                            <li key={category2ndLevel.id}>
                              <a className="menu-title">
                                <span>{category2ndLevel.name}</span>
                              </a>
                              <ul>
                                {category2ndLevel.children.map(
                                  (category3rdLevel) => {
                                    return (
                                      <li key={category3rdLevel.id}>
                                        <a>
                                          <span>{category3rdLevel.name}</span>
                                        </a>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default CategoriesMenu;
