class Checkin < ApplicationRecord

  #validation - server
  validates :typeCheckin, presence: {message: ":write a comment."}
  validates :latitude, :longitude, presence: {message: ": ‎make sure javascript is enabled."}
  #created_at is automatic

end
