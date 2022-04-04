<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Subcategory;
use Illuminate\Auth\Access\HandlesAuthorization;

class SubcategoryPolicy
{
    use HandlesAuthorization;

    // Agents CANNOT BROWSE Subcategories
    // Employers CANNOT BROWSE Subcategories
    public function viewAny(User $user)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT READ Subcategories
    // Employers CANNOT READ Subcategories
    public function view(User $user, Subcategory $category)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT ADD Subcategories
    // Employers CANNOT ADD Subcategories
    public function create(User $user)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT EDIT Subcategories
    // Employers CANNOT EDIT Subcategories
    public function update(User $user, Subcategory $category)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT DELETE Subcategories
    // Employers CANNOT DELETE Subcategories
    public function delete(User $user, Subcategory $category)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT RESTORE Subcategories
    // Employers CANNOT RESTORE Subcategories
    public function restore(User $user, Subcategory $category)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }

    // Agents CANNOT FORCE DELETE Subcategories
    // Employers CANNOT FORCE Delete Subcategories
    public function forceDelete(User $user, Subcategory $category)
    {
        if ($user->agent) {
            return false;
        }

        if ($user->employer) {
            return false;
        }
    }
}
