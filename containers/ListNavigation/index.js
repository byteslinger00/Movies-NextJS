/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from 'next/link';
import { useRouter } from 'next/router';

import Navbar, { NavbarItem } from 'components/UI/Navbar';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';

const ListNavigation = ({ listId }) => {
  const { pathname } = useRouter();

  const updateListLinks = [
    {
      title: 'Edit List',
      href: {
        pathname: LINKS.ADD_OR_EDIT_LIST.HREF,
        query: {[QUERY_PARAMS.ID]: listId}
      },
      disabled: false
    },
    {
      title: 'View List',
      href: {
        pathname: LINKS.LIST.HREF,
        query: {
          [QUERY_PARAMS.ID]: listId,
          [QUERY_PARAMS.PAGE]: 1
        }
      },
      disabled: false
    },
    {
      title: 'Add/Remove Items',
      href: {
        pathname: LINKS.ADD_OR_REMOVE_ITEMS_AT_LIST.HREF,
        query: {
          [QUERY_PARAMS.LIST_ID]: listId,
          [QUERY_PARAMS.PAGE]: 1
        }
      },
      disabled: false
    },
    {
      title: 'Choose Image',
      href: {
        pathname: LINKS.CHOOSE_LIST_IMAGE.HREF,
        query: {[QUERY_PARAMS.LIST_ID]: listId, [QUERY_PARAMS.PAGE]: 1}
      },
      disabled: false
    },
    {
      title: 'Delete List',
      href: {
        pathname: LINKS.REMOVE_LIST.HREF,
        query: {[QUERY_PARAMS.ID]: listId}
      },
      disabled: false
    }
  ];

  const createListLinks = [
    {
      title: 'Step1: List Details',
      href: {
        pathname: LINKS.ADD_OR_EDIT_LIST.HREF
      },
      disabled: false
    },
    {
      title: 'Step2: Add Items',
      href: {
        pathname: LINKS.ADD_OR_REMOVE_ITEMS_AT_LIST.HREF
      },
      disabled: true
    },
    {
      title: 'Step3: Choose Image',
      href: {
        pathname: LINKS.CHOOSE_LIST_IMAGE.HREF
      },
      disabled: true
    }
  ];

  let listLinks = listId ? updateListLinks : createListLinks;

  return (
    <Navbar>
      {listLinks.map(listLink => (
        <NavbarItem
          key={listLink.title}
          disabled={listLink.disabled}
          selected={pathname === listLink.href.pathname}>
          <Link
            href={listLink.href}>
            <a>{listLink.title}</a>
          </Link>
        </NavbarItem>  
      ))}
    </Navbar>
  );
};

export default ListNavigation;
