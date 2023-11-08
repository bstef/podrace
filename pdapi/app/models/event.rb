class Event < ApplicationRecord
  has_many :events_users
  has_and_belongs_to_many :users, through: :events_users
end
